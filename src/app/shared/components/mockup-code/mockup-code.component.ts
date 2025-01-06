import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

import { HighlightAuto } from 'ngx-highlightjs';

@Component({
    selector: 'app-mockup-code',
    imports: [HighlightAuto],
    templateUrl: './mockup-code.component.html',
    styleUrl: './mockup-code.component.scss'
})
export class MockupCodeComponent implements OnInit {

  ngOnInit(): void { }

  highlightedCode = {
    code: `@Component({
  selector: 'app-mockup-code',
  standalone: true,
  imports: [],
  templateUrl: './mockup-code.component.html',
  styleUrl: './mockup-code.component.scss'
})`,
    dataPrefix: ''
  };

  // highlightedCode = inject(HttpClient).get('website/src/app/shared/components/mockup-code/mockup-code.component.ts');
}
