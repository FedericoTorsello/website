import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { remixHome4Line, remixArticleLine } from '@ng-icons/remixicon'
import { NgIcon } from '@ng-icons/core';

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
  readonly themeService = inject(ThemeService);

  readonly translocoService = inject(TranslocoService);

  readonly remixHome4Fill = remixHome4Line;
  readonly remixArticleLine = remixArticleLine;

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
