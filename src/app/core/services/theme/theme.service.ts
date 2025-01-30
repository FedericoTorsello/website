import { computed, Injectable, signal } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

enum Theme {
  Light = 'light',
  Dark = 'dark'
};

const { Dark, Light } = Theme;

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

  get #printMode() {
    return window.matchMedia('(print)');
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

    // const beforePrint$ = fromEvent(window, 'beforeprint');
    // beforePrint$.subscribe(() => console.log('aaaa'))

    // const afterPrint$ = fromEvent(window, 'afterprint');
    // afterPrint$.subscribe(() => {
    //     this.toggleTheme();
    // })

    systemThemeObservable$
      .pipe(takeUntilDestroyed())
      .subscribe(({ matches }) => {
        this.applyTheme(matches ? Dark : Light);
      });
  }

}
