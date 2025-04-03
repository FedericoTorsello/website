import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Education } from '../../../models/cv-data.model';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-education',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent implements OnInit {
  readonly translocoService = inject(TranslocoService);

  ngOnInit(): void {
    const educationIT: Education[] = [
      {
        qualification: {
          name: 'Laurea Magistrale in Ingegneria e Scienze Informatiche',
          details: "Ingegneria dei sistemi software per l'ICT"
        },
        institution: {
          name: 'Università di Bologna',
        },
        thesis: {
          name: 'Progettazione e realizzazione di un Indoor Positioning System basato su geomagnetismo e sensor fusion',
          link: 'https://drive.google.com/file/d/1Kcv2qO_BBBeQRGyYlGV7KIvCHQuWT3WM/view?usp=sharing'
        }
      },
      {
        qualification: {
          name: 'Laurea Triennale in Informatica Applicata',
          details: 'Domotica'
        },
        institution: {
          name: 'Università degli Studi di Urbino "Carlo Bo"',
        },
        thesis: {
          name: 'Accesso alla rete Internet attraverso il protocollo Bluetooth',
          link: 'https://drive.google.com/file/d/0B-NHZ__iPz66VHd5VzlPNV8xbGs/view?usp=sharing'
        }
      }
    ];

    const educationEN: Education[] = [
      {
        qualification: {
          name: "Master's Degree in Engineering and Computer Science",
          details: "Software systems engineering for ICT"
        },
        institution: {
          name: 'University of Bologna',
        },
        thesis: {
          name: 'Progettazione e realizzazione di un Indoor Positioning System basato su geomagnetismo e sensor fusion',
          link: 'https://drive.google.com/file/d/1Kcv2qO_BBBeQRGyYlGV7KIvCHQuWT3WM/view?usp=sharing'
        }
      },
      {
        qualification: {
          name: "Bachelor's Degree in Applied Computer Science",
          details: 'Home automation'
        },
        institution: {
          name: 'University of Urbino "Carlo Bo"',
        },
        thesis: {
          name: 'Accesso alla rete Internet attraverso il protocollo Bluetooth',
          link: 'https://drive.google.com/file/d/0B-NHZ__iPz66VHd5VzlPNV8xbGs/view?usp=sharing'
        }
      }
    ];

    this.translocoService.setTranslation({ education: educationIT }, 'education/it');
    this.translocoService.setTranslation({ education: educationEN }, 'education/en');
  }

  asEducationList = (education: Education[]) => education;

}
