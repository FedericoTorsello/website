import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  private getElementTag(tag: keyof HTMLElementTagNameMap): string {
    const elements = document.getElementsByTagName(tag);

    return Array.from(elements)
      .map(({ outerHTML }) => outerHTML)
      .join('\r\n');
  }

  print(elementId: string, title: string, applyBackground: boolean) {
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`elementId ${elementId} not found`);
      return;
    }

    const popupWin = window.open('', '_blank', 'top=0,left=0,height=auto,width=auto');
    if (!popupWin) {
      console.error('error while printing');
      return;
    }

    const forceBackground = applyBackground
      ? 
      `
      print-color-adjust: exact; 
      -webkit-print-color-adjust: exact; 
      color-adjust: exact;`
      : '';

    popupWin.document.open();
    popupWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        ${this.getElementTag('link')}
        ${this.getElementTag('style')}
        <style>
          * {
              ${forceBackground}
          }
        </style>
      </head>
      <body>
          ${element.outerHTML}
        <script defer>
          window.addEventListener('load', () => window.print(), { once: true });
          window.onafterprint = () => window.close();
        </script>
      </body>
      </html>
    `);
    // popupWin.document.close();
  }
}
