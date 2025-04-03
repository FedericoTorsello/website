import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { animate, query, style, transition, trigger } from '@angular/animations';
import { PAGES } from './app.routes';

export const routeTransition = trigger('routeTransition', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, scale: 0.9 }),
    ], { optional: true }),
    query(':leave', [
      animate('0.2s', style({ opacity: 0, scale: 0.8 }))
    ], { optional: true }),
    query(':enter', [
      animate('0.05s', style({ opacity: 1, scale: 1 }))
    ], { optional: true })
  ])
])

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [routeTransition],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  #router = inject(Router);
  #pages = inject(PAGES);

  #selectedIndex = 0;

  selectTab(index: number) {
    this.#selectedIndex = index;
    const { url } = Object.values(this.#pages)[this.#selectedIndex];
    this.#router.navigateByUrl(url);
  }

  onSwipeLeft(event: Event) {
    this.selectTab(Math.min(this.#selectedIndex + 1, Object.entries(this.#pages).length - 1));
  }

  onSwipeRight(event: Event) {
    this.selectTab(Math.max(this.#selectedIndex - 1, 0));
  }
}

