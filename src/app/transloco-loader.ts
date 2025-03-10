import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  readonly #http = inject(HttpClient);

  getTranslation(langPath: string): Observable<Translation> {
    return this.#http
      .get<Translation>(`i18n/${langPath}.json`)
      .pipe(
        catchError(() => of({}))
      );
  }
}
