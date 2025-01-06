// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="cv-container">
      <app-header></app-header>
      <app-skills></app-skills>
      <app-experience></app-experience>
      <app-education></app-education>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
