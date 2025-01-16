import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';
import { KeyValuePipe, NgClass } from '@angular/common';
import { Lang } from '../../../models/lang.model';

type SelectLang = Record<Lang, { short: Lang, full: 'Italiano' | 'English' }>;

@Component({
  selector: 'app-header',
  imports: [
    TranslocoDirective,
    NgClass,
    KeyValuePipe
    // RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);
  readonly translocoService = inject(TranslocoService);

  l = () => console.log('cioa');


  langs: SelectLang =
    {
      it: {
        full: 'Italiano',
        short: 'it'
      },
      en: {
        full: 'English',
        short: 'en'
      }
    }

}
