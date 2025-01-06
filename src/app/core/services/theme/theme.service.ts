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

  private get prefersColorScheme() {
    return window.matchMedia('(prefers-color-scheme: dark)');
  }

  private get systemTheme(): Theme {
    return this.prefersColorScheme.matches ? Dark : Light;
  }

  private theme = signal(this.systemTheme);

  isDarkMode = computed(() => this.theme() === Dark);

  toggleTheme(): void {
    this.applyTheme(this.isDarkMode() ? Light : Dark);
  }

  applyTheme(theme: Theme) {
    this.theme.update(() => theme);

    document.documentElement.setAttribute(ThemeExtraInfo.DataTheme, this.theme());
  }

  constructor() {
    this.applyTheme(this.systemTheme);

    const systemThemeObservable$ = fromEvent<MediaQueryList>(this.prefersColorScheme, 'change');
    systemThemeObservable$
      .pipe(takeUntilDestroyed())
      .subscribe(({ matches }) => {
        this.applyTheme(matches ? Dark : Light);
      });
  }

}
