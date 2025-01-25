import { Component, input } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { Certificate } from '../../../models/cv-data.model';

@Component({
  selector: 'app-certificates',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.scss'
})
export class CertificatesComponent {
  readonly certificateList: Certificate[] = [
    {
      name: 'Angular (Basic)',
      institution: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/20d505b1bfa1'
    },
    {
      name: 'Angular (Intermediate)',
      institution: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/ecfcaf465a14'
    },
    {
      name: 'JavaScript (Basic)',
      institution: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/01977157754c'
    },
    {
      name: 'JavaScript (Intermediate)',
      institution: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/148ec144d370'
    },
    {
      name: 'Responsive Web Design',
      institution: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/fcc8a85a1a4-e90a-4e74-a1f7-1e5513baf409/responsive-web-design'
    },
    {
      name: 'Javascript Algorithms and Data Structures',
      institution: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/fcc8a85a1a4-e90a-4e74-a1f7-1e5513baf409/javascript-algorithms-and-data-structures-v8'
    },
    {
      name: 'Front End Development Libraries',
      institution: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/fcc8a85a1a4-e90a-4e74-a1f7-1e5513baf409/front-end-development-libraries'
    },
    {
      name: 'Practical Deep Learning: Geolocalizzazione indoor',
      institution: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-54OI12DB'
    },
    {
      name: 'GCP Developer Enablement Program',
      institution: 'Codemotion',
      link: 'https://drive.google.com/file/d/1QiTUDgwwJvkkC7NY-culoNuMHfGM8f5N/view?usp=sharing'
    },
    {
      name: 'Inglese Livello B2 - BSG Level 4',
      institution: 'British School Group',
      link: 'https://drive.google.com/file/d/1at8gtpzqfP8VdDKWOfsYAfvRi7F3zzme/view?usp=sharing'
    },
  ];
}
