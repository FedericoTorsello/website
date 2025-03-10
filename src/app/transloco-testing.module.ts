
import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import it from '../public/i18n/it.json';
import config from '../../transloco.config';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { it },
    translocoConfig: {
      availableLangs: ['it', 'en'],
      defaultLang: 'it',
    },
    preloadLangs: true,
    ...options
  });
}
