import { Component, input } from '@angular/core';

@Component({
  selector: 'app-certificates',
  imports: [],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  readonly certificatesList = input<{ name: string, institution: string, link: string }[]>();
}
