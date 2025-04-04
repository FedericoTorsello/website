import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { PAGES } from '../../app.routes';

@Component({
  selector: 'app-home-page',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class HomePageComponent {
  readonly pages = inject(PAGES);
}
