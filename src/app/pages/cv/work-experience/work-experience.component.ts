import { Component, input, OnInit, inject } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import * as remixIcon from '@ng-icons/remixicon';
import { Page, WorkExperience } from '../../../models/cv-data.model';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-work-experience',
  imports: [
    NgIcon,
    TranslocoDirective
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent implements OnInit {
  readonly translocoService = inject(TranslocoService);

  readonly timeline = input(true);

  readonly page = input.required<Page>();

  readonly remixIcon = remixIcon;

  asWorkExperienceList = (value: WorkExperience[]) => value;

  ngOnInit(): void {
    this.initItLanguage();
    this.initEnLanguage();
  }

  private initItLanguage() {
    const workExperienceListIT: Record<Page, WorkExperience[]> = {
      page1: [
        {
          period: {
            from: 2022,
            to: 'in corso'
          },
          jobTitle: 'Software Developer',
          employer: {
            name: 'ACSoftware S.r.l',
            website: 'http://www.acsoftware.it'
          },
          details: [
            'Sviluppato nuove feature per un portale Angular di gestione ferroviaria',
            'Sviluppato e mantenuto portlets Angular per un portale di emissione Flexible Benefits aziendali basato su Liferay',
            'Sviluppato librerie Angular per progetti interni e cliente',
            'Refactoring e sviluppo di componenti Angular per un sistema di prenotazioni utenti (agenti o clienti)',
            'Sviluppato un componente in AngularJs ed Ionic per il controllo domotico del cronotermostato attraverso una app multi-piattaforma',
            'Sviluppato portlets Angular eseguite su piattaforma Liferay per la gestione delle emergenze e dei servizi professionali di supporto alle emergenze',
            'Sviluppato widget su piattaforma HCL DX',
            'Collaborato alla realizzazione e al refactoring di un editor vettoriale SVG in JavaScript Vanilla'
          ]
        },
        {
          period: {
            from: 2021,
            to: 2021
          },
          jobTitle: 'Software Developer',
          employer: {
            name: 'Revevol Italia',
            website: 'https://www.revevol.com'
          },
          details: [
            'Sviluppate nuove feature per un gestore automatizzato di gruppi Google Workspace utilizzando Java e API AODocs',
            'Realizzato un nuovo gestore automatizzato per la sincronizzazione degli account del personale su Facebook Workplace utilizzando Java e Google Cloud Platform',
            'Sviluppato componenti Angular per form e consultazione dati interfacciati con API AODocs',
            'Sviluppati custom scripts Java per il download di file e gestione dati su da Google Drive attraverso API AODocs',
            'Sviluppati siti vetrina con Awesome Table',
            'Partecipato alla realizzazione di una app multi-piattaforma con Flutter SDK (Android, iOS) per la gestione degli ordini di cibo e medicinali per i centri di vendita veterinari',
            'Sviluppato un parser HTML in Java per automatizzare il processo di inserimento dati',
            'Consulenza per sviluppo di script con Google Apps Script'
          ]
        },
      ],
      page2: [
        {
          period: {
            from: 2019,
            to: 2020
          },
          jobTitle: 'ICT consultant\nSoftware Developer',
          employer: {
            name: 'Alten Italia',
            website: 'https://www.alten.it'
          },
          details: [
            'Sviluppato un installer wizard per sistemi Windows utilizzando WiX Toolset',
            'Sviluppata una UI con Windows Presentation Foundation per il nuovo installer',
            'Utilizzo/gestione di software specifici dell\'ambiente ferroviario',
            'Creazione di percorsi traccia treno Bibbiena-Poppi-Porrena'
          ]
        },
        {
          period: {
            from: 2017,
            to: 2019
          },
          jobTitle: 'Software Developer',
          employer: {
            name: 'GetConnected S.r.l - Gruppo EURIS',
            website: 'https://www.euris.it'
          },
          details: [
            'Partecipato allo sviluppo di un\'applicazione mobile cross platform (Android, iOS) con Apache Cordova, AngularJS e Bootstrap',
            'Sviluppato plugin Apache Cordova per sistemi Android e iOS',
            'Sviluppato interfacce web a servizi proprietari finanziari con Angular',
            'Manutenzione di un sistema documentale con Java e Oracle PL/SQL',
            'Sviluppato un plugin per JIRA e Confluence in Java e Spring',
          ]
        }
      ]
    };

    this.translocoService.setTranslation({ workExperience: workExperienceListIT }, 'workExperience/it');
  }

  private initEnLanguage() {
    const workExperienceListEN: Record<Page, WorkExperience[]> = {
      page1: [
        {
          period: {
            from: 2022,
            to: 'in progress'
          },
          jobTitle: 'Software Developer',
          employer: {
            name: 'ACSoftware S.r.l',
            website: 'http://www.acsoftware.it'
          },
          details: [
            'Developed new features for an Angular railway management portal',
            'Developed and maintained Angular portlets for a Liferay based corporate Flexible Benefits issuing portal',
            'Developed Angular libraries for internal and client projects',
            'Refactoring and development of Angular components for a user reservation system (agents or customers)',
            'Developed a component in AngularJs and Ionic for the home automation control of the chronothermostat through a multi-platform app',
            'Developed Angular portlets running on the Liferay platform for emergency management and professional emergency support services',
            'Developed widget on HCL DX platform',
            'Collaborated on building and refactoring an SVG vector editor in Vanilla JavaScript'
          ]
        },
        {
          period: {
            from: 2021,
            to: 2021
          },
          jobTitle: 'Software Developer',
          employer: {
            name: 'Revevol Italia',
            website: 'https://www.revevol.com'
          },
          details: [
            'Developed new features for an automated Google Workspace group manager using Java and AODocs API',
            'Created a new automated manager for synchronizing staff accounts on Facebook Workplace using Java and Google Cloud Platform',
            'Developed Angular components for forms and data consultation interfaced with AODocs API',
            'Developed custom Java scripts for downloading files and managing data from Google Drive via AODocs API',
            'Developed showcase sites with Awesome Table',
            'Participated in the creation of a multi-platform app with Flutter SDK (Android, iOS) for managing food and medicine orders for veterinary sales centers',
            'Developed an HTML parser in Java to automate the data entry process',
            'Consulting for script development with Google Apps Script'
          ]
        },
      ],
      page2: [
        {
          period: {
            from: 2019,
            to: 2020
          },
          jobTitle: 'ICT consultant\nSoftware Developer',
          employer: {
            name: 'Alten Italia',
            website: 'https://www.alten.it'
          },
          details: [
            'Developed an installer wizard for Windows systems using WiX Toolset',
            'Developed a UI with Windows Presentation Foundation for the new installer',
            'Use/management of software specific to the railway environment',
            'Creation of Bibbiena-Poppi-Porrena train track routes'
          ]
        },
        {
          period: {
            from: 2017,
            to: 2019
          },
          jobTitle: 'Software Developer',
          employer: {
            name: 'GetConnected S.r.l - Gruppo EURIS',
            website: 'https://www.euris.it'
          },
          details: [
            'Participated in the development of a cross platform mobile application (Android, iOS) with Apache Cordova, AngularJS and Bootstrap',
            'Developed Apache Cordova plugin for Android and iOS systems',
            'Developed web interfaces to proprietary financial services with Angular',
            'Maintenance of a document system with Java and Oracle PL/SQL',
            'Developed a plugin for JIRA and Confluence in Java and Spring',
          ]
        }
      ]
    };

    this.translocoService.setTranslation({ workExperience: workExperienceListEN }, 'workExperience/en');
  }
}
