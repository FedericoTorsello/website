import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme/theme.service';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    TranslocoDirective,
    // RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly themeService = inject(ThemeService);

  readonly translocoService = inject(TranslocoService);
}
