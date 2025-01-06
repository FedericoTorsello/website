import { Component, OnInit, Injector } from '@angular/core';
import { ComponentDataModel, getEnterpriseId, initRequestStatus } from 'oneflex-core';
import { BaseComponentComponent } from 'oneflex-core-ui';
import { EnterpriseModel, EnterprisesService } from 'oneflex-enterprises';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'oneflex-automatic-adhesion-sending-management',
  templateUrl: './automatic-adhesion-sending-management.component.html',
  styleUrls: ['./automatic-adhesion-sending-management.component.scss']
})
export class AutomaticAdhesionSendingManagementComponent extends BaseComponentComponent implements OnInit {
  static readonly componentData: ComponentDataModel = {
    title: 'automatic-adhesion-sending-management',
    path: 'automatic-adhesion-sending-management',
  };

  readonly data = AutomaticAdhesionSendingManagementComponent.componentData;

  requestEnterpriseId = initRequestStatus<number>();

  currentEnterprise: EnterpriseModel | undefined;

  form = this.fb.group({
    autoMembershipInvitation: [false],
  });

  get autoMembershipInvitation(): FormControl {
    return this.form.get('autoMembershipInvitation') as FormControl;
  }

  constructor(
    private enterprisesService: EnterprisesService,
    injector: Injector,
  ) {
    super(injector);
  }

  ngOnInit(): void {
    const enterpriseId = getEnterpriseId();
    if (enterpriseId) {
      this.requestEnterpriseId = {
        message: {
          type: 'success',
          label: ''
        },
        result: Number(enterpriseId),
        showResult: true
      };

      this.enterprisesService.getEnterpriseById(this.requestEnterpriseId.result!).subscribe((enterprise) => {
        const { autoMembershipInvitation }
          = this.currentEnterprise
          = enterprise;

        this.autoMembershipInvitation.patchValue(autoMembershipInvitation);
      });
    } else {
      this.requestEnterpriseId = {
        message: {
          type: 'warning',
          label: this.translocoService.translate('_errors.no-data', undefined, this.scope)
        },
        result: undefined,
        showResult: true
      };
    }
  }

  save(): void {
    const enterprise = this.currentEnterprise;
    if (enterprise) {
      enterprise.autoMembershipInvitation = this.autoMembershipInvitation.value;

      this.enterprisesService.updateEnterprise(enterprise).subscribe((enterpriseUpdated) => {
        const { autoMembershipInvitation }
          = this.currentEnterprise
          = enterpriseUpdated;

        this.autoMembershipInvitation.patchValue(autoMembershipInvitation);
      });
    }
  }

}
