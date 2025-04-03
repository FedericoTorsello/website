import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon } from '@ng-icons/core';

import { PAGES } from '../../../app.routes';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    TranslocoDirective,
    RouterLink,
    RouterLinkActive,
    NgIcon,
    KeyValuePipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly pages = inject(PAGES);
  readonly themeService = inject(ThemeService);
  readonly translocoService = inject(TranslocoService);

  readonly langs = [
    {
      short: 'it',
      full: 'Italiano'
    },
    {
      short: 'en',
      full: 'English'
    }
  ];
}
