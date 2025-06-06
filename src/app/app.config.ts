import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
  importProvidersFrom,
  Injectable,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { HIGHLIGHT_OPTIONS, provideHighlightOptions } from 'ngx-highlightjs';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HAMMER_GESTURE_CONFIG, HAMMER_LOADER, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

@Injectable()
export class CustomHammerConfig extends HammerGestureConfig {
  override overrides = {
    'swipeLeft': { threshold: 100 },
    'swipeRight': { threshold: 100 }
  };
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    }),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(routes,
      withComponentInputBinding(), //accedere ai parametri dell'URL come @Input
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      })
    ),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['it', 'en'],
        defaultLang: 'it',
        fallbackLang: 'it',
        missingHandler: {
          useFallbackTranslation: true,
        },
        flatten: {
          aot: !isDevMode(),
        },
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        themePath: 'styles/solarized-dark.css',
      },
    },
    provideHighlightOptions({
      coreLibraryLoader: () => import('highlight.js/lib/core'),
      lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'), // Optional, add line numbers if needed
      themePath: 'theme-dark.css',
      languages: {
        typescript: () => import('highlight.js/lib/languages/typescript'),
        css: () => import('highlight.js/lib/languages/css'),
      },
    }),
    {
      provide: HAMMER_LOADER,
      useValue: () => import('hammerjs')
        .then(() => {
          Hammer.defaults.cssProps.userSelect = 'auto';
        })
    },
    // {
    //   provide: HAMMER_GESTURE_CONFIG,
    //   useClass: HammerGestureConfig,
    // },
    importProvidersFrom(HammerModule)
  ],
};
