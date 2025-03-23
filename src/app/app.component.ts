import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { routeDetails } from './app.routes';
import { animate, query, stagger, state, style, transition, trigger } from '@angular/animations';

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
  animations: [routeTransition]
})
export class AppComponent {
  #router = inject(Router);

  selectedIndex = 0;

  #touchStartX: number | undefined;
  #touchEndX: number | undefined;

  #routeDetails = routeDetails;

  selectTab(index: number) {
    this.selectedIndex = index;
    const { url: path } = Object.values(this.#routeDetails)[this.selectedIndex];
    this.#router.navigateByUrl(path);
  }

  onTouchStart(event: TouchEvent) {
    this.#touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.#touchEndX = event.touches[0].clientX;
  }

  onTouchEnd() {
    if (!this.#touchEndX || !this.#touchStartX) {
      return;
    }

    const deltaX = this.#touchEndX - this.#touchStartX;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.selectTab(Math.max(this.selectedIndex - 1, 0));
      } else {
        this.selectTab(Math.min(this.selectedIndex + 1, Object.entries(this.#routeDetails).length - 1));
      }
    }
  }
}

