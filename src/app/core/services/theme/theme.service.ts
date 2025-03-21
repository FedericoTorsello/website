import { computed, Injectable, signal } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const Theme = {
  Light: 'bumblebee', //'light'
  Dark: 'dim' //'dark'
} as const;

const { Dark, Light } = Theme;

type Theme = typeof Theme[keyof typeof Theme];

enum ThemeExtraInfo {
  DataTheme = 'data-theme'
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  Theme = Theme;

  get #prefersColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)');
  }

  get systemTheme(): Theme {
    return this.#prefersColorScheme.matches ? Dark : Light;
  }

  #theme = signal(this.systemTheme);

  isDarkMode = computed(() => this.#theme() === Dark);

  toggleTheme(): void {
    this.applyTheme(this.isDarkMode() ? Light : Dark);
  }

  applyTheme(theme: Theme) {
    this.#theme.update(() => theme);

    document.documentElement.setAttribute(ThemeExtraInfo.DataTheme, this.#theme());
  }

  constructor() {
    this.applyTheme(this.systemTheme);

    const systemThemeObservable$ = fromEvent<MediaQueryList>(this.#prefersColorScheme, 'change');

    systemThemeObservable$
      .pipe(takeUntilDestroyed())
      .subscribe(({ matches }) => {
        this.applyTheme(matches ? Dark : Light);
      });
  }

}
