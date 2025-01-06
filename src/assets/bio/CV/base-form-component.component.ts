import {
  ChangeDetectorRef,
  Directive,
  Injector,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AutocapitalizePipe, LimitsType, OneTrustModel, OneTrustService, RemainingLimits } from 'oneflex-core';
import { Product } from 'oneflex-products';
import { UserBalanceService } from 'src/app/services/user-balance.service';
import { TranslocoService, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  FbSelectOption,
  GERNERIC_MODAL,
  GenericModalComponent,
} from 'oneflex-core-ui';
import { CheckOrderComponent } from '../check-order/check-order.component';
import { ORDER_DATA } from 'src/app/constant/constants';
import { ComponentPortal } from '@angular/cdk/portal';
import { OrderData } from 'src/app/models/order-data.model';
import { Purchase, PurchasesService } from 'oneflex-purchases';
import { BeneficiaryTableModel } from 'oneflex-beneficiaries';
import { firstValueFrom, Subject, switchMap } from 'rxjs';

@Directive()
export abstract class BaseFormComponent implements OnInit {
  abstract form: FormGroup;

  @Input() linkForPrivacyNotAccepted: Subject<string> | undefined;

  @Input() productList: Product.ProductModel[] = [];

  readonly limitsTypeTranslationKey = {
    [LimitsType.Fringe]: 'social-welfare-expenses',
    [LimitsType.Pension]: 'pension-fund',
    [LimitsType.Sanity]: 'medical-expenses',
    [LimitsType.Null]: '',
  };

  readonly relativesHref = 'gestisci-familiari';

  showOnetrustConsent = false;

  remainingLimit: RemainingLimits = {};

  availableBalance: number = 0;

  priceProductSelect: number = 0;

  userDetails: BeneficiaryTableModel | null = null;

  limitData: {
    type: LimitsType;
    amount: number;
    overflowing: boolean;
  } = {
      type: LimitsType.Null,
      amount: 0,
      overflowing: false,
    };

  get productSelected() {
    return this.form.get('product')?.value;
  }

  get availableToRelative() {
    return this.productSelectedDetail?.availableToRelative || false;
  }

  get ownerConfiguration() {
    if (this.availableToRelative) {
      return Purchase.HolderConfiguration.BENEFICIARY_OR_RELATIVE;
    }
    return Purchase.HolderConfiguration.ONLY_BENEFICIARY;
  }

  get userDetailsName() {
    return `${this.userDetails?.personalDetails.firstName} ${this.userDetails?.personalDetails.lastName}`;
  }

  get beneficiary(): string {
    return this.form.get('beneficiary')?.value || '';
  }

  get beneficiaryAcceptedLabel() {
    return this.availableToRelative
      ? 'beneficiary-or-family-member'
      : 'beneficiary-only';
  }

  get beneficiaryForProduct(): FbSelectOption[] {
    if (!this.userDetails) {
      return [];
    }

    if (this.ownerConfiguration === Purchase.HolderConfiguration.BENEFICIARY_OR_RELATIVE) {
      return [
        {
          value: this.userDetails.id,
          label: this.userDetailsName,
        },
        ...this.userDetails.relatives.map((ben) => {
          return {
            value: ben.id,
            label: `${ben.firstName} ${ben.lastName}`,
          };
        }),
      ];
    }

    return [
      {
        value: this.userDetails.id,
        label: this.userDetailsName,
      },
    ];
  }

  get productSelectedDetail(): Product.ProductModel {
    return this.productList.find((el) => el.id === this.productSelected) || this.productList[0];
  }

  get quantity(): number {
    return this.form.get('quantity')?.value || 1;
  }

  get enoughBalance() {
    return (this.availableBalance || 0) >= this.priceProductSelect * this.quantity;
  }

  get canPurchase(): boolean {
    let defaultCondition = !this.enoughBalance || this.form.invalid;

    // aggiungo controllo sui limiti dell'utente
    if (this.productSelectedDetail) {
      if (this.limitData.type && this.limitData.amount >= 0) {
        defaultCondition = defaultCondition || this.limitData.overflowing;
      }
    }

    return defaultCondition;
  }

  protected readonly oneTrustService = this.injector.get(OneTrustService);

  protected readonly translocoService = this.injector.get(TranslocoService);
  public readonly scope = this.injector.get<string>(TRANSLOCO_SCOPE);

  protected readonly autocapitalizePipe = this.injector.get(AutocapitalizePipe);

  constructor(
    protected injector: Injector,
    protected userBalanceService: UserBalanceService,
    protected purchaseService: PurchasesService,
    protected changeDetector: ChangeDetectorRef,
    private modalService: NgbModal,
  ) { }

  async ngOnInit(): Promise<void> {

    // select categoria con scelta vuota, onChange
    // updateLimit non su check flag validità
    this.updateLimit();

    this.userBalanceService
      .getBalance()
      .subscribe((val) => this.availableBalance = val);

    this.userBalanceService
      .getRemainingLimits()
      .subscribe((val) => this.remainingLimit = val);

    this.form.get('product')?.valueChanges.subscribe(() => this.updateLimit());

    const beneficiary = await firstValueFrom(this.userBalanceService.getCurrentBeneficiary());
    if (beneficiary) {
      this.userDetails = beneficiary;

      const {
        id,
        companyInfo: {
          companyId
        }
      } = this.userDetails;

      this.form.get('beneficiary')?.setValue(id);

      this.showOnetrustConsent = (await firstValueFrom(this.oneTrustService.getOneTrustStatus(companyId))).showOnetrustConsent;
    }
  }

  initForm() {
    this.form.reset();
  }

  checkAmountChanges(amount: number) {
    this.priceProductSelect = amount;
    this.updateLimit();
  }

  updateLimit() {
    const LIMIT_TYPE: LimitsType = (this.productSelectedDetail?.expenseLimit?.name.toUpperCase() as LimitsType) || LimitsType.Null;

    if (!this.remainingLimit.hasOwnProperty(LIMIT_TYPE)) {
      return;
    }

    const LIMIT_VAL = this.remainingLimit[LIMIT_TYPE as keyof RemainingLimits] || 0;

    this.limitData = {
      amount: this.availableBalance > LIMIT_VAL
        ? LIMIT_VAL
        : this.availableBalance,
      type: LIMIT_TYPE,
      overflowing: LIMIT_VAL - this.priceProductSelect * this.quantity < 0,
    };

    this.changeDetector.detectChanges();
  }

  abstract redeemProduct(): void;

  protected openModal(order: OrderData) {
    const modalRef = this.modalService.open(GenericModalComponent, {
      modalDialogClass: 'hidden-header',
      scrollable: true,
      backdrop: 'static',
      keyboard: false,
    });

    const component: GenericModalComponent = modalRef.componentInstance;

    component.isCloseButtonEnabled = false;

    component.modalFooter = {};

    component.modalBodyComponents = [
      new ComponentPortal(
        CheckOrderComponent,
        null,
        Injector.create({
          providers: [
            {
              provide: GERNERIC_MODAL,
              useValue: modalRef.componentInstance,
            },
            {
              provide: ORDER_DATA,
              useValue: order,
            },
          ],
        })
      ),
    ];

    modalRef.closed.subscribe((res) => {
      this.initForm();
    });
  }

  protected createOneTrustLink(instantLinkToken: string) {
    const container = document.createElement('div');

    container.appendChild((() => {
      const description = document.createElement('p');
      description.textContent = this.autocapitalizePipe.transform(this.translocoService.translate('_onetrust.preferences-privacy._product.warning', {}, this.scope));
      return description;
    })());

    container.appendChild((() => {
      const anchor = document.createElement('a');
      anchor.href = `${OneTrustService.onetrustPrivacyUrl}/${instantLinkToken}`;
      anchor.text = this.autocapitalizePipe.transform(this.translocoService.translate('_onetrust.preferences-privacy._product.consent', {}, this.scope));
      anchor.target = '_blank';
      return anchor;
    })());

    return container;
  }

  createLinkSubjectParticularData(taxCode: string) {
    this.oneTrustService.getAccessToken()
      .pipe(
        switchMap(({ access_token }) => {
          return this.oneTrustService.getPreferencesProfile(taxCode, access_token);
        })
      ).subscribe({
        next: (preferencesProfile) => {
          if (preferencesProfile.instantLinkTokens && preferencesProfile.instantLinkTokens.length > 0) {
            const { instantLinkToken } = preferencesProfile.instantLinkTokens[0];
            const purpose = preferencesProfile.purposes.find((({ id }) => id == OneTrustModel.PermissionsIds.DatiParticolari));
            if (!purpose || purpose.status == OneTrustModel.Status.NO_CONSENT || purpose.status == OneTrustModel.Status.WITHDRAWN) {
              const link = this.createOneTrustLink(instantLinkToken).outerHTML;
              this.linkForPrivacyNotAccepted?.next(link);
            }
          }
        },
        error: (error) => {
          console.error(error);
        }
      });
  }

}
