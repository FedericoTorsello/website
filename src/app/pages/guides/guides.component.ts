import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { PAGES } from '../../app.routes';

@Component({
  selector: 'app-guides',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './guides.component.html',
  styleUrl: './guides.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class GuidesComponent {
  readonly pages = inject(PAGES);
}
