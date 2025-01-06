
import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import it from '../assets/i18n/it.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { it },
    translocoConfig: {
      availableLangs: ['it'],
      defaultLang: 'it',
    },
    preloadLangs: true,
    ...options
  });
}