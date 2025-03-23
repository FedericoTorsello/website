import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { routeDetails } from '../../../app.routes';

import * as remixIcon from '@ng-icons/remixicon';

@Component({
  selector: 'app-header',
  imports: [
    TranslocoDirective,
    RouterLink,
    RouterLinkActive,
    NgIcon
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly routeDetails = routeDetails;

  readonly themeService = inject(ThemeService);
  readonly translocoService = inject(TranslocoService);

  readonly remixIcon = remixIcon;

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
