import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { Education, WorkExperience, Tool, Contacts, Certificate } from '../../models/cv-data.model';
import { EducationComponent } from './education/education.component';
import { ContactsComponent } from "./contacts/contacts.component";
import { ToolsComponent } from "./tools/tools.component";
import { Tools } from './tools/tools.enum';
import { CapitalizePipe } from "../../shared/pipes/capitalize.pipe";
import { CertificatesComponent } from "./certificates/certificates.component";
import {
  svglBootstrap,
  svglChartjs,
  svglFlutter,
} from '@ng-icons/svgl';

import {
  diAndroidOriginal,
  diAngularjsOriginal,
  diAngularmaterialOriginal,
  diAngularOriginal,
  diArduinoOriginal,
  diCsharpOriginal,
  diCss3Original,
  diDartOriginal,
  diGitOriginal,
  diHtml5Original,
  diIonicOriginal,
  diJavaOriginal,
  diJavascriptOriginal,
  diRaspberrypiOriginal,
  diSassOriginal,
  diTailwindcssOriginal,
  diTypescriptOriginal,
} from '@ng-icons/devicon/original';

@Component({
  selector: 'app-cv',
  imports: [
    TranslocoDirective,
    WorkExperienceComponent,
    EducationComponent,
    ContactsComponent,
    ToolsComponent,
    CapitalizePipe,
    CertificatesComponent,
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss'
})
export class CvComponent {
  readonly Tools = Tools;

  readonly personalInfo = {
    name: 'Federico',
    surname: 'Torsello',
    get fullName() {
      return `${this.name} ${this.surname}`;
    },
  };

  readonly contacts: Contacts = {
    phone: '+39 327 05 99 329',
    email: 'federico127001@gmail.com',
    website: {
      shortLink: 'vercel/federicotorsello',
      fullLink: 'https://website-federicotorsellos-projects.vercel.app',
    },
    linkedin: {
      shortLink: 'linkedin/federicotorsello',
      fullLink: 'https://www.linkedin.com/in/federicotorsello',
    },
    github: {
      shortLink: 'github/FedericoTorsello',
      fullLink: 'https://github.com/FedericoTorsello',
    },
  };

  readonly educationList: Education[] = [
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
        link: 'https://drive.google.com/open?id=0B-NHZ__iPz66VHd5VzlPNV8xbGs'
      }
    }
  ];

  readonly workExperienceList: Record<'pag1' | 'pag2', WorkExperience[]> = {
    pag1: [
      {
        period: {
          from: 2022,
          to: 'IN CORSO'
        },
        jobTitle: 'software developer',
        employer: {
          name: 'ACSoftware S.r.l'
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
      }
    ],
    pag2: [
      {
        period: {
          from: 2021,
          to: 2021
        },
        jobTitle: 'software developer',
        employer: {
          name: 'Revevol Italia'
        },
        details: [
          'Sviluppate nuove feature per un gestore automatizzato di gruppi Google Workspace utilizzando Java e API AODocs',
          'Realizzato un nuovo gestore automatizzato per la sincronizzazione degli account del personale su Facebook Workplace utilizzando Java e Google Cloud Platform',
          'Sviluppato componenti Angular per form e consultazione dati interfacciati con API AODocs',
          'Sviluppati custom scripts Java per il download di file e gestione dati su da Google Drive attraverso API AODocs',
          'Sviluppati siti vetrina con Awesome Table',
          'Partecipato alla realizzazione di una app multi-piattaforma con Flutter SDK (Android, iOS) per la gestione degli ordini di cibo e medicinali per i centri di vendita veterinari',
          // 'Aggiornamento e manutenzione di alcuni tool Java',
          'Sviluppato un parser HTML in Java per automatizzare il processo di inserimento dati',
          'Consulenza per sviluppo di script con Google Apps Script'
        ]
      },
      {
        period: {
          from: 2019,
          to: 2020
        },
        jobTitle: 'ICT consultant\nsoftware developer',
        employer: {
          name: 'Alten Italia'
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
        jobTitle: 'software developer',
        employer: {
          name: 'GetConnected S.r.l - Gruppo EURIS',
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

  readonly tools: Record<'languages' | 'platforms' | 'libraries' | 'frameworks' | 'others', Tool[]> = {
    languages: [{
      name: 'TypeScript',
      icon: {
        src: diTypescriptOriginal,
      },
    },
    {
      name: 'JavaScript',
      icon: {
        src: diJavascriptOriginal,
      },
    },
    {
      name: 'HTML5',
      icon: {
        src: diHtml5Original
      }
    }, {
      name: 'CSS3',
      icon: {
        src: diCss3Original
      },
    },
    {
      name: 'SASS',
      icon: {
        src: diSassOriginal
      },
    },
    {
      name: 'SVG',
      icon: {
        src: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300">
          <g stroke="#000" stroke-width="38.009">
              <g id="svgstar" transform="translate(150 150)">
                  <path id="svgbar" fill="#ffb13b"
                      d="M-84.149-15.851a22.417 22.417 0 1 0 0 31.702H84.15a22.417 22.417 0 1 0 0-31.702Z" />
                  <use xlink:href="#svgbar" transform="rotate(45)" />
                  <use xlink:href="#svgbar" transform="rotate(90)" />
                  <use xlink:href="#svgbar" transform="rotate(135)" />
              </g>
          </g>
          <use xlink:href="#svgstar" />
        </svg>`
      },
    },
    {
      name: 'Java',
      icon: {
        src: diJavaOriginal
      },
    },
    {
      name: 'C Sharp',
      icon: {
        src: diCsharpOriginal
      },
    },
    {
      name: 'Dart',
      icon: {
        src: diDartOriginal
      },
    },
      // {
      //   name: 'Kotlin',
      //   icon: {
      //     src: diKotlinOriginal
      //   },
      // }
    ],
    platforms: [
      {
        name: 'Android',
        icon: {
          src: diAndroidOriginal
        },
      },
      {
        name: 'Liferay',
        icon: {
          src: `
            <svg fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.170227 5.21272C0.170227 4.08465 1.08471 3.17017 2.21278 3.17017H25.7021C26.8302 3.17017 27.7447 4.08465 27.7447 5.21272V28.7021C27.7447 29.8302 26.8302 30.7446 25.7021 30.7446H2.21278C1.08471 30.7446 0.170227 29.8302 0.170227 28.7021V5.21272ZM4.25533 7.76591C4.25533 7.48389 4.48395 7.25527 4.76597 7.25527H7.8298C8.11182 7.25527 8.34044 7.48389 8.34044 7.76591V10.8297C8.34044 11.1118 8.11182 11.3404 7.8298 11.3404H4.76597C4.48395 11.3404 4.25533 11.1118 4.25533 10.8297V7.76591ZM9.87236 7.25527C9.59034 7.25527 9.36172 7.48389 9.36172 7.76591V10.8297C9.36172 11.1118 9.59034 11.3404 9.87236 11.3404H12.9362C13.2182 11.3404 13.4468 11.1118 13.4468 10.8297V7.76591C13.4468 7.48389 13.2182 7.25527 12.9362 7.25527H9.87236ZM14.4681 7.76591C14.4681 7.48389 14.6967 7.25527 14.9787 7.25527H18.0426C18.3246 7.25527 18.5532 7.48389 18.5532 7.76591V10.8297C18.5532 11.1118 18.3246 11.3404 18.0426 11.3404H14.9787C14.6967 11.3404 14.4681 11.1118 14.4681 10.8297V7.76591ZM4.76597 12.3617C4.48395 12.3617 4.25533 12.5903 4.25533 12.8723V15.9361C4.25533 16.2181 4.48395 16.4468 4.76597 16.4468H7.8298C8.11182 16.4468 8.34044 16.2181 8.34044 15.9361V12.8723C8.34044 12.5903 8.11182 12.3617 7.8298 12.3617H4.76597ZM9.36172 12.8723C9.36172 12.5903 9.59034 12.3617 9.87236 12.3617H12.9362C13.2182 12.3617 13.4468 12.5903 13.4468 12.8723V15.9361C13.4468 16.2181 13.2182 16.4468 12.9362 16.4468H9.87236C9.59034 16.4468 9.36172 16.2181 9.36172 15.9361V12.8723ZM20.0851 12.3617C19.8031 12.3617 19.5745 12.5903 19.5745 12.8723V15.9361C19.5745 16.2181 19.8031 16.4468 20.0851 16.4468H23.149C23.431 16.4468 23.6596 16.2181 23.6596 15.9361V12.8723C23.6596 12.5903 23.431 12.3617 23.149 12.3617H20.0851ZM4.25533 17.9787C4.25533 17.6967 4.48395 17.468 4.76597 17.468H7.8298C8.11182 17.468 8.34044 17.6967 8.34044 17.9787V21.0425C8.34044 21.3245 8.11182 21.5531 7.8298 21.5531H4.76597C4.48395 21.5531 4.25533 21.3245 4.25533 21.0425V17.9787ZM14.9787 17.468C14.6967 17.468 14.4681 17.6967 14.4681 17.9787V21.0425C14.4681 21.3245 14.6967 21.5531 14.9787 21.5531H18.0426C18.3246 21.5531 18.5532 21.3245 18.5532 21.0425V17.9787C18.5532 17.6967 18.3246 17.468 18.0426 17.468H14.9787ZM19.5745 17.9787C19.5745 17.6967 19.8031 17.468 20.0851 17.468H23.149C23.431 17.468 23.6596 17.6967 23.6596 17.9787V21.0425C23.6596 21.3245 23.431 21.5531 23.149 21.5531H20.0851C19.8031 21.5531 19.5745 21.3245 19.5745 21.0425V17.9787ZM9.87236 22.5744C9.59034 22.5744 9.36172 22.803 9.36172 23.0851V26.1489C9.36172 26.4309 9.59034 26.6595 9.87236 26.6595H12.9362C13.2182 26.6595 13.4468 26.4309 13.4468 26.1489V23.0851C13.4468 22.803 13.2182 22.5744 12.9362 22.5744H9.87236ZM14.4681 23.0851C14.4681 22.803 14.6967 22.5744 14.9787 22.5744H18.0426C18.3246 22.5744 18.5532 22.803 18.5532 23.0851V26.1489C18.5532 26.4309 18.3246 26.6595 18.0426 26.6595H14.9787C14.6967 26.6595 14.4681 26.4309 14.4681 26.1489V23.0851ZM20.0851 22.5744C19.8031 22.5744 19.5745 22.803 19.5745 23.0851V26.1489C19.5745 26.4309 19.8031 26.6595 20.0851 26.6595H23.149C23.431 26.6595 23.6596 26.4309 23.6596 26.1489V23.0851C23.6596 22.803 23.431 22.5744 23.149 22.5744H20.0851Z"
                    fill="#0B63CE">
                </path>
            </svg>`
        }
      },
      {
        name: 'HyperIoT',
        icon: {
          src: 'assets/img/tools/hyperiot.png'
        }
      },
      {
        name: 'AODocs',
        icon: {
          src: `
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" viewBox="0 0 40 62.62">
              <defs>
                  <style>
                      .cls-1{fill:#000325;}.cls-1-x,.cls-2-x,.cls-3-x,.cls-4-x{}.cls-2-x{fill:#f5c600;}.cls-2-x,.cls-3-x,.cls-4-x{fill-rule:evenodd;}.cls-3-x{fill:#0da0ff;}.cls-4-x{fill:#ff2153;}
                  </style>
              </defs>
              <path id="Bottom" class="cls-4-x" d="M9.95,31.81L0,41.76l20.86,20.86,19.9-19.9h-19.87s-3.65-3.64-10.94-10.91Z" />
              <path id="Middle" class="cls-2-x" d="M22.54,41.19h18.6l-9.3-9.3-9.3,9.3Z" />
              <path id="Top" class="cls-3-x" d="M.54,20.27l20.35,20.35,20.27-20.27L20.81,0,.54,20.27Z" />
            </svg>`
        }
      },
      {
        name: 'Awesome Table',
        icon: {
          src: `
            <svg width="166" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M33.313 12.57c.062.246.123-.347 0 0-.738 1.845-4.605 3.783-6.818 3.598 2.705-4.364 3.075-8.483 3.075-11.25 0-3.074-.86-4.918-.86-4.918-3.382 4.365-10.329 5.717-16.046 6.148l.062-.062h-.062c1.476-1.598 2.46-2.705 3.197-4.918C12.787 3.688 8.422 3.75 4.98 5.84 1.844 7.746.184 10.267 0 14.14v9.59C0 27.111 2.766 30 6.086 30h13.985c6.94 0 9.67-7.324 13.242-17.43z"
                  fill="#FFC107">
              </path>
              <mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="34" height="30">
                  <path
                      d="M33.313 12.57c.062.246.123-.347 0 0-.738 1.845-4.605 3.783-6.818 3.598 2.705-4.364 3.075-8.483 3.075-11.25 0-3.074-.86-4.918-.86-4.918-3.382 4.365-10.329 5.717-16.046 6.148l.062-.062h-.062c1.476-1.598 2.46-2.705 3.197-4.918C12.787 3.688 8.422 3.75 4.98 5.84 1.844 7.746.184 10.267 0 14.14v9.59C0 27.111 2.766 30 6.086 30h13.985c6.94 0 9.67-7.324 13.242-17.43z"
                      fill="#FFC107">
                  </path>
              </mask>
              <g mask="url(#a)">
                  <path
                      d="M27.726 15.738c-.677.369-1.16.398-1.16.398l.091-.071c.308-.554.265-.444.573-.936l-4.115-4.002-1.783 2.398-17.828 2.46 2.643 2.643-2.643 2.52 2.643 2.644-1.782 1.905 4.259 4.707 5.792 5.563c0 .465 14.802-3.26 15.243-5.563 3.524-.605 7.489-4.707.772-11.96l-2.705-2.706z"
                      fill="#FFA000"><
                  /path>
                  <path
                      d="M12.54 17.275H3.38v3.812h9.16v-3.812zM13.955 26.558h5.472a3.7 3.7 0 0 0 3.688-3.689v-.491h-9.16v4.18zM23.115 17.275h-9.16v3.812h9.16v-3.812zM16.537 11.865H5.84a2.4 2.4 0 0 0-2.398 2.398v1.66h19.673v-4.796c-.8.185-2.89.677-6.578.738zM3.38 23.546c0 1.66 1.353 3.073 3.075 3.073h6.086V22.5H3.38v1.046zM47.63 23.886a1 1 0 0 1-.936-.645l-.972-2.564h-4.714a1 1 0 0 0-.935.645l-.727 1.919a1 1 0 0 1-.935.645h-1.339l4.75-12.271a1 1 0 0 1 .933-.64H44.1l4.961 12.91h-1.43zm-5.597-7.71l-.977 2.583h3.947l-1.015-2.656c-.16-.43-.32-.891-.48-1.383l-.479-1.513-.516 1.55c-.16.516-.32.99-.48 1.42zM63.106 14.203l-3.879 9.683h-.656a1 1 0 0 1-.916-.598l-2.209-5.027-2.05 5.004a1 1 0 0 1-.926.62h-.62l-3.916-9.682 1.245-.012a1 1 0 0 1 .933.615l2.531 6.055 2.324-5.127h1.144l2.305 5.054 2.515-5.973a1 1 0 0 1 .921-.612h1.255zM72.33 22.613h-.018c-.393.381-.934.72-1.623 1.015a5.422 5.422 0 0 1-2.157.442c-1.009 0-1.9-.209-2.675-.627a4.71 4.71 0 0 1-1.789-1.752c-.43-.75-.645-1.598-.645-2.545 0-1.082.227-2.004.682-2.766a4.628 4.628 0 0 1 1.808-1.77 4.955 4.955 0 0 1 2.453-.628c.811 0 1.549.203 2.213.609.664.393 1.192.94 1.586 1.641.393.7.59 1.519.59 2.453l-.018.812h-7.414c.11.872.467 1.567 1.07 2.084.614.504 1.389.756 2.323.756.676 0 1.223-.123 1.642-.37.042-.025.084-.052.125-.078.505-.32 1.202-.225 1.538.27l.31.454zm-3.964-6.879c-.726 0-1.359.172-1.9.516-.541.332-.898.91-1.07 1.734h5.422v-.129a2.074 2.074 0 0 0-.424-1.107 2.34 2.34 0 0 0-.885-.737 2.454 2.454 0 0 0-1.143-.277zM80.56 15.971c-.384.423-1.04.428-1.527.128a4.68 4.68 0 0 0-.359-.199c-.43-.221-.83-.332-1.199-.332-.258 0-.516.03-.774.092a1.322 1.322 0 0 0-.627.35c-.172.16-.259.4-.259.72.013.443.21.756.59.94.394.185.88.351 1.458.499.504.135.996.307 1.475.516.48.197.873.492 1.18.885.32.381.48.922.48 1.623 0 .603-.172 1.12-.517 1.55-.331.43-.768.762-1.309.995a4.303 4.303 0 0 1-1.678.332c-.701 0-1.396-.123-2.084-.369-.677-.258-1.254-.694-1.734-1.309l.538-.46c.417-.358 1.037-.297 1.487.018.126.088.256.168.391.24.43.208.953.313 1.568.313.233 0 .467-.037.7-.11.234-.087.43-.216.59-.388.173-.185.259-.43.259-.738 0-.295-.092-.523-.277-.682a1.76 1.76 0 0 0-.7-.406 8.411 8.411 0 0 0-.978-.295 14.72 14.72 0 0 1-1.568-.535 3.573 3.573 0 0 1-1.272-.922c-.332-.406-.498-.953-.498-1.642 0-.578.16-1.07.48-1.475a3.183 3.183 0 0 1 1.29-.96 4.151 4.151 0 0 1 1.697-.35c.578 0 1.205.123 1.881.37.677.245 1.236.639 1.679 1.18l-.383.421zM91.815 19.035c0 .984-.221 1.857-.664 2.62-.43.75-1.02 1.34-1.77 1.77-.738.43-1.568.645-2.49.645-.922 0-1.759-.215-2.509-.645a4.845 4.845 0 0 1-1.788-1.77c-.43-.763-.646-1.636-.646-2.62 0-.983.215-1.85.646-2.6a4.804 4.804 0 0 1 1.788-1.789c.75-.43 1.587-.646 2.509-.646.922 0 1.752.216 2.49.646a4.67 4.67 0 0 1 1.77 1.789c.443.75.664 1.617.664 2.6zm-1.936 0c.012-.651-.117-1.223-.388-1.715a2.8 2.8 0 0 0-1.07-1.162 2.84 2.84 0 0 0-1.53-.424 2.934 2.934 0 0 0-2.638 1.586c-.258.492-.38 1.064-.368 1.715-.013.64.11 1.212.368 1.716.27.491.634.879 1.088 1.162.468.282.984.424 1.55.424a2.84 2.84 0 0 0 1.53-.424c.455-.283.812-.67 1.07-1.162.27-.505.4-1.076.388-1.716zM98.256 14.037c.8 0 1.439.185 1.918.554.48.356.824.848 1.033 1.475.172-.307.424-.615.756-.922.332-.32.719-.584 1.162-.793a3.282 3.282 0 0 1 1.42-.314c.836 0 1.488.185 1.955.554.467.356.793.842.977 1.457.197.602.295 1.278.295 2.028v5.81h-.918a1 1 0 0 1-1-1v-4.699c0-.713-.135-1.29-.405-1.734-.271-.442-.781-.663-1.531-.663-.713 0-1.303.227-1.771.682a2.177 2.177 0 0 0-.682 1.623v5.79h-.918a1 1 0 0 1-1-1V18.15c0-.688-.148-1.254-.443-1.697-.295-.442-.78-.663-1.457-.663-.467 0-.885.104-1.254.313a2.344 2.344 0 0 0-.867.83c-.209.332-.313.707-.313 1.125v4.828a1 1 0 0 1-1 1h-.918v-8.683a1 1 0 0 1 1-1h.918v1.55c.295-.443.707-.837 1.236-1.18a3.214 3.214 0 0 1 1.807-.536zM118.08 22.613h-.018c-.394.381-.935.72-1.623 1.015a5.425 5.425 0 0 1-2.158.442c-1.008 0-1.9-.209-2.674-.627a4.703 4.703 0 0 1-1.789-1.752c-.431-.75-.646-1.598-.646-2.545 0-1.082.228-2.004.683-2.766a4.627 4.627 0 0 1 1.807-1.77 4.956 4.956 0 0 1 2.453-.628c.811 0 1.549.203 2.213.609.664.393 1.193.94 1.586 1.641.394.7.59 1.519.59 2.453l-.018.812h-7.414c.111.872.467 1.567 1.07 2.084.614.504 1.389.756 2.323.756.677 0 1.224-.123 1.642-.37.042-.025.084-.052.125-.078.505-.32 1.203-.225 1.539.27l.309.454zm-3.965-6.879c-.725 0-1.359.172-1.9.516-.541.332-.897.91-1.069 1.734h5.422v-.129a2.075 2.075 0 0 0-.424-1.107 2.342 2.342 0 0 0-.886-.737 2.45 2.45 0 0 0-1.143-.277zM125.837 23.886V12.894h-4.37l.505-1.284c.151-.383.52-.634.931-.634h9.378l-.482 1.272c-.148.389-.52.646-.935.646h-3.036v9.992a1 1 0 0 1-1 1h-.991zM140.159 14.203v9.683h-.918a1 1 0 0 1-1-1v-.494c-.295.406-.732.787-1.31 1.143-.578.357-1.248.535-2.01.535a4.076 4.076 0 0 1-2.232-.645c-.664-.43-1.192-1.027-1.586-1.79-.393-.761-.59-1.634-.59-2.618s.203-1.85.609-2.6a4.395 4.395 0 0 1 1.678-1.771c.713-.43 1.525-.646 2.434-.646.677 0 1.267.148 1.771.443.516.295.928.64 1.236 1.033v-.273a1 1 0 0 1 1-1h.918zm-4.795 8.115c.59 0 1.106-.141 1.549-.424a3.011 3.011 0 0 0 1.033-1.18 3.83 3.83 0 0 0 .368-1.697c0-.615-.123-1.168-.368-1.66a2.877 2.877 0 0 0-1.033-1.162c-.443-.295-.959-.442-1.549-.442a2.75 2.75 0 0 0-1.513.424c-.442.283-.787.67-1.033 1.162-.245.492-.368 1.05-.368 1.678 0 .627.123 1.193.368 1.697.246.492.591.885 1.033 1.18a2.75 2.75 0 0 0 1.513.424zM147.293 14c.86 0 1.629.216 2.305.646.689.418 1.23 1.008 1.623 1.77.394.75.59 1.617.59 2.601s-.196 1.857-.59 2.619c-.393.762-.928 1.358-1.604 1.789a4.141 4.141 0 0 1-2.269.645 4 4 0 0 1-1.881-.442c-.553-.308-.99-.652-1.31-1.033v.236a1 1 0 0 1-1 1h-.899V10.96a1 1 0 0 1 .692-.952l1.207-.39v5.986c.283-.406.707-.775 1.273-1.107a3.613 3.613 0 0 1 1.863-.497zm-.258 1.734c-.578 0-1.095.142-1.55.424a2.978 2.978 0 0 0-1.051 1.18c-.246.492-.369 1.052-.369 1.679s.123 1.193.369 1.697c.258.492.609.885 1.051 1.18.455.295.972.443 1.55.443.577 0 1.088-.148 1.53-.443a3.004 3.004 0 0 0 1.033-1.18 3.67 3.67 0 0 0 .387-1.697c0-.627-.129-1.186-.387-1.678a2.844 2.844 0 0 0-1.033-1.18c-.442-.283-.953-.425-1.53-.425zM154.321 23.886a1 1 0 0 1-1-1V10.96a1 1 0 0 1 .692-.951l1.208-.391v14.268h-.9zM165.517 22.613h-.019c-.393.381-.934.72-1.623 1.015a5.421 5.421 0 0 1-2.158.442c-1.008 0-1.899-.209-2.674-.627a4.71 4.71 0 0 1-1.789-1.752c-.43-.75-.645-1.598-.645-2.545 0-1.082.227-2.004.682-2.766a4.627 4.627 0 0 1 1.807-1.77 4.956 4.956 0 0 1 2.453-.628c.812 0 1.549.203 2.213.609.664.393 1.193.94 1.587 1.641.393.7.59 1.519.59 2.453l-.019.812h-7.414c.111.872.467 1.567 1.07 2.084.615.504 1.389.756 2.324.756.676 0 1.223-.123 1.641-.37.043-.025.085-.052.126-.078.505-.32 1.202-.225 1.538.27l.31.454zm-3.966-6.879c-.725 0-1.358.172-1.899.516-.541.332-.898.91-1.07 1.734h5.422v-.129a2.075 2.075 0 0 0-.424-1.107 2.347 2.347 0 0 0-.885-.737 2.457 2.457 0 0 0-1.144-.277z"
                      fill="#fff">
                  </path>
              </g>
            </svg>`
        }
      },
      {
        name: 'Google Apps Script',
        icon: {
          src: 'assets/img/tools/apps_script.png'
        }
      },
    ],
    frameworks: [
      {
        name: 'Angular',
        icon: {
          src: diAngularOriginal
        },
      },
      {
        name: 'Angular JS',
        icon: {
          src: diAngularjsOriginal
        }
      },
      {
        name: 'Bootstrap',
        icon: {
          src: svglBootstrap
        },
      },
      {
        name: 'Tailwind CSS',
        icon: {
          src: diTailwindcssOriginal
        },
      },
      {
        name: 'Ionic',
        icon: {
          src: diIonicOriginal
        }
      },
      {
        name: 'Apache Cordova',
        icon: {
          src: `
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" fill="#A5B0B8" viewBox="0 0 203 203" style="enable-background:new 0 0 203 203;" xml:space="preserve">
              <path d="M193.2,203h-34.4l2.4-29h-16.9l-2.4,29H70.6l-2.4-29H51.3l2.4,29H19.3L0,77.3L48.3,0h115.9l48.3,77.3 L193.2,203z M154.5,38.7h-31l2.1,14.5H86.9L89,38.7H58L38.6,77.3l9.7,77.3h115.9l9.7-77.3L154.5,38.7z M137.6,129 c-2.7,0-4.8-8-4.8-18s2.2-18,4.8-18c2.7,0,4.8,8,4.8,18S140.3,129,137.6,129z M76.7,130.5c-2.7,0-4.8-8-4.8-18s2.2-18,4.8-18 c2.7,0,4.8,8,4.8,18S79.3,130.5,76.7,130.5z"/>
            </svg>`
        }
      },
      {
        name: 'Flutter',
        icon: {
          src: svglFlutter
        },
      },
      {
        name: 'J2ME',
        icon: {
          src: 'assets/img/tools/j2me.png'
        }
      },
      {
        name: 'WiX Toolset',
        icon: {
          src: 'assets/img/tools/wix.png'
        },
      },
    ],
    libraries: [
      {
        name: 'RxJS',
        icon: {
          src: `
            <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="12.100000000000001 8.4 262.79999999999995 272.2">
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="53.496" x2="177.932" y1="247.701"
                    y2="115.323">
                    <stop offset="0" stop-color="#e01d84" />
                    <stop offset=".401" stop-color="#df1d85" />
                    <stop offset=".77" stop-color="#932c87" />
                    <stop offset="1" stop-color="#5d2f88" />
                </linearGradient>
                <radialGradient id="b" cx="190.456" cy="80.2"
                    gradientTransform="matrix(1 .00239 -.002 .8362 .16 12.685)" gradientUnits="userSpaceOnUse"
                    r="121.582">
                    <stop offset="0" stop-color="#e01d84" />
                    <stop offset=".139" stop-color="#de1e85" />
                    <stop offset=".285" stop-color="#d62085" />
                    <stop offset=".434" stop-color="#c92386" />
                    <stop offset=".586" stop-color="#b72786" />
                    <stop offset=".739" stop-color="#9d2b87" />
                    <stop offset=".891" stop-color="#7c2e88" />
                    <stop offset="1" stop-color="#5d2f88" />
                </radialGradient>
                <linearGradient id="c" x1="83.212" x2="137.371" y1="62.336" y2="62.336"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#e01d84" />
                    <stop offset=".238" stop-color="#da1e85" />
                    <stop offset=".658" stop-color="#c72085" />
                    <stop offset=".999" stop-color="#b52284" />
                </linearGradient>
                <path
                    d="M29.6 175.3c-5.2-16.2-6.7-33.3-3.7-50.9 1.3-7.3 3.3-14.3 5.5-21.4 0 0 13.8-45.3 60.5-66 0 0 16.1-8.5 40.3-9.1 0 0-3.3-3.2-5.4-4.6-11.4-7.6-28.4-10.1-38.7.6-3.1 3.2-5.7 6.7-8.6 9.9-3.3 3.6-7.3 6.6-11.9 8.3-4 1.5-8 1.2-12.1 1.9-4.2.7-8.5 2.2-11.9 4.9-3.7 3-5.2 7-5.6 11.6-.4 3.6-.3 7.3-.5 10.9C37 82 33.6 85 26 90.9c-3.2 2.4-5.9 5.6-7.9 9-6 10.6 3.6 21.6 4.1 32.3.1 2.2-.1 4.4-.9 6.5-.8 2.3-2.4 3.8-3.7 5.7-1.8 2.5-3 5.5-2.5 8.6s2.1 6 3.6 8.7c2.9 4.8 6.5 9.1 10.3 13.2.2 0 .4.2.6.4"
                    fill="#e32286" />
                <path
                    d="M220.4 213.7c23-10 32.8-27.3 32.8-27.3 21.5-29.3 14.2-60.2 14.2-60.2-13.7 29.8-26.2 38-26.2 38 33.7-51.3.2-82.3.2-82.3 13.7 29.2-4.5 64.8-4.5 64.8-15.3 32.2-37 43.7-37 43.7 24.2 4.5 42-11.8 42-11.8-34.7 37.5-72.3 35.7-72.3 35.7 15.8 17.7 39.5 16.2 39.5 16.2-31 7.3-60.1-3-84-22.9-4.5-3.7-8.8-7.7-12.8-12 0 0-3.6-3.8-4.3-4.8l-.1-.1c-.5 18.5 18.8 35.7 18.8 35.7-24.2-10-35.3-31.7-35.3-31.7s-16.3-27.8-4.5-59.5 47.5-38.5 47.5-38.5c29.5 14.3 54.5 18.8 54.5 18.8 52.7 8.8 49.7-17 49.7-17 .5-22.2-33-45.8-33-45.8C145.9 8.4 91.9 37 91.9 37c-46.7 20.7-60.5 66-60.5 66-2.2 7.1-4.2 14.1-5.5 21.4-5.1 29.7 2.6 57.8 19.3 82.8 26 38.8 68.2 52.2 68.2 52.2 62.5 21.2 105.2-10 105.2-10 39.3-27 47.2-58.2 47.2-58.2-31.7 24.8-45.4 22.5-45.4 22.5zM171.6 67.8c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.4 5.4-5.4-2.4-5.4-5.4 2.4-5.4 5.4-5.4z"
                    fill="url(#a)" />
                <path
                    d="M238.5 98.4c.5-22.2-33-45.8-33-45.8C145.8 8.4 91.8 37 91.8 37c-46.7 20.7-60.5 66-60.5 66-2.7 7.7-5.1 19.5-5.1 19.5-2.9 14.8-1.6 28.5-1.6 28.5 1.2 13.1 4.1 21.9 4.1 21.9 3 9.4 4.4 12.3 4.4 12.3-.1-.3-.6-2.5-.6-2.5s-4.2-20.2-.3-39.6c0 0 3.4-20.2 17.2-35.8 0 0 22.4-31.9 64.1-19.4 0 0 9 3.2 12.1 4.8 3.1 1.5 8.5 3.8 8.5 3.8 29.5 14.3 54.5 18.8 54.5 18.8 52.9 8.9 49.9-16.9 49.9-16.9zm-66.9-19.7c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4 5.4 2.4 5.4 5.4-2.4 5.4-5.4 5.4z"
                    fill="url(#b)" />
                <path
                    d="M137.4 58.2l-34.1-10.6c-.2 0-1.2-.5-3 0 0 0-20.1 5.1-16.6 16.1 0 0 2.1 6.9 7.8 13.6l37.5-1.8z"
                    fill="url(#c)" />
            </svg>`
        }
      },
      {
        name: 'Angular Material (CDK)',
        icon: {
          src: diAngularmaterialOriginal
        },
      },
      {
        name: 'Transloco Angular i18n',
        icon: {
          src: 'assets/img/tools/transloco.png'
        }
      },
      {
        name: 'ngx-easy-table',
        icon: {
          src: diAngularOriginal
        },
      },
      {
        name: 'ChartJS',
        icon: {
          src: svglChartjs
        }
      },
      {
        name: 'LeafletJS',
        icon: {
          src: 'assets/img/tools/leafletjs.png'
        }
      },
      // {
      //   name: 'React',
      //   icon: {
      //     src: diReactOriginal
      //   }
      // },
      // {
      //   name: 'Redux',
      //   icon: {
      //     src: diReduxOriginal
      //   }
      // },   
      {
        name: 'JSoup',
        icon: {
          src: 'assets/img/tools/jsoup.jpg'
        }
      },
      {
        name: 'Gulp',
        icon: {
          src: `        
              <svg viewBox="0 0 128 128">
                <path fill-rule="evenodd" clip-rule="evenodd" fill="#EB4A4B" d="M36.965 35.459c.877 9.232 1.747 18.412 2.637 27.798 1.451-2.495 2.501-4.888 4.085-6.848 1.475-1.826 3.334-3.511 5.357-4.678 2.641-1.524 6.104-.089 6.96 2.614.23.725-.319 1.697-.511 2.556-.646-.341-1.479-.529-1.901-1.051-1.793-2.217-2.873-2.479-4.856-.563-3.699 3.576-5.779 8.056-6.573 13.091-.153.974.456 2.067.713 3.105 1.011-.348 2.185-.476 3.002-1.084 2.656-1.977 4.302-4.666 5.21-7.88.197-.696 1.265-1.145 1.933-1.708.32.658 1.05 1.433.897 1.954a373.814 373.814 0 01-4.536 14.429c-.162.484-1.051.725-1.604 1.079-.223-.636-.692-1.302-.617-1.901.168-1.358.605-2.683.91-3.927l-7.24 3.333c.405 4.622.825 9.807 1.323 14.985.382 3.954 1.029 4.978 4.923 5.728 4.544.875 9.173 1.434 13.792 1.774a60.391 60.391 0 0020.23-1.904c2.472-.664 3.458-2.29 3.635-4.717.162-2.235.524-4.456.775-6.685.493-4.391.972-8.783 1.476-13.358-1.667 1.056-2.978 2.238-4.511 2.739-1.116.365-2.524-.169-3.803-.303.245-1.174.23-2.497.796-3.487.922-1.618 2.224-3.021 3.364-4.515l-.491-.591c-.817.483-1.832.8-2.413 1.485-1.182 1.394-2.339 2.886-3.13 4.52-1.324 2.735-2.333 5.622-3.518 8.426-.515 1.216-.959 3.076-2.684 2.366-1.845-.761-.547-2.386-.114-3.542.689-1.844 1.599-3.606 2.215-4.962-1.746.208-3.516.459-5.294.614-.752.064-1.646-.348-2.261-.07-2.045.924-3.341.553-3.766-1.711-.947.615-1.749 1.448-2.694 1.672-1.147.273-2.703.452-3.543-.121-.673-.459-.918-2.184-.688-3.196.457-2.012 1.311-3.946 2.122-5.859.502-1.185 1.007-3.077 2.701-2.253 1.674.813.154 2.185-.232 3.286-.599 1.702-1.209 3.401-1.813 5.101l.96.58c.914-.794 2.053-1.441 2.693-2.415 1.048-1.592 1.681-3.452 2.673-5.086.411-.677 1.296-1.065 1.967-1.584.136.862.462 1.748.354 2.58-.107.841-.698 1.61-.981 2.442-.425 1.246-.768 2.52-1.2 3.969 2.043.078 2.918-.782 3.495-2.299 1.826-4.793 3.672-9.581 5.679-14.3.343-.808 1.509-1.264 2.296-1.884.091.974.525 2.078.216 2.899-1.645 4.349-3.492 8.62-5.228 12.935-.293.727-.387 1.534-.572 2.304 3.059-1.375 5.612-2.895 6.544-6.146.228-.79 1.162-1.377 1.771-2.058l1.416 1.5c.43-.362.824-.774 1.291-1.075 1.47-.947 3.053-1.782 4.603-.315 1.604 1.517.39 2.995-.448 4.307-.912 1.431-2.029 2.73-3.057 4.086 2.312-1.49 5.469-2.158 5.889-5.378 1.024-7.865 1.924-15.746 2.837-23.625.271-2.332.416-4.679.627-7.109-18.21 4.409-36.029 4.436-54.088-.069zm7.816 61.369c.877 2.317 2.209 4.593 2.558 7.011.737 5.147.924 10.372 1.446 15.554.076.755.565 1.792 1.175 2.124 8.98 4.88 18.047 5.726 27.209.389 1.367-.796 1.62-1.847 1.797-3.325.857-7.181-1.051-14.798 3.54-21.56-12.856 3.189-25.403 3.288-37.725-.193zm30.991-60.08c4.362-.421 8.671-1.445 12.985-2.291.813-.159 1.535-.778 2.299-1.185-1.007-.885-1.878-1.311-2.788-1.418-4.53-.535-9.076-.947-13.603-1.508-.684-.085-1.905-.929-1.854-1.083 1.321-3.98 1.256-8.485 4.254-11.839 3.789-4.24 7.617-8.443 11.416-12.648-2.826-3.04-2.864-3.044-5.425-.383-1.448 1.504-2.771 3.15-4.342 4.512-5.813 5.038-9.896 11.005-10.692 18.872-.183 1.805-1.174 2.457-3.069 2.485-6.256.091-12.519.263-18.761.674-3.093.203-6.148.997-9.221 1.523l-.028 1.149c1.923.593 3.809 1.372 5.773 1.749 10.944 2.098 21.991 2.458 33.056 1.391zM72.276 34c-2.477 2-4.524 2-6.501 0h6.501z" />
              </svg>`
        }
      }
    ],
    others: [
      {
        name: 'VS Code',
        icon: {
          src: `
          <svg viewBox="0 0 128 128">
          <mask id="a" width="128" height="128" x="0" y="0" maskUnits="userSpaceOnUse"
              style="mask-type:alpha">
              <path fill="#fff" fill-rule="evenodd"
                  d="M90.767 127.126a7.968 7.968 0 0 0 6.35-.244l26.353-12.681a8 8 0 0 0 4.53-7.209V21.009a8 8 0 0 0-4.53-7.21L97.117 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026L15.6 32.013a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.335 5.335 0 0 0-.006 7.888L20.796 64 1.74 81.387a5.336 5.336 0 0 0 .006 7.887l7.048 6.411a5.327 5.327 0 0 0 6.807.303l21.974-16.68 50.45 46.025a7.96 7.96 0 0 0 2.743 1.793Zm5.252-92.183L57.74 64l38.28 29.058V34.943Z"
                  clip-rule="evenodd"></path>
          </mask>
          <g mask="url(#a)">
              <path fill="#0065A9"
                  d="M123.471 13.82 97.097 1.12A7.973 7.973 0 0 0 88 2.668L1.662 81.387a5.333 5.333 0 0 0 .006 7.887l7.052 6.411a5.333 5.333 0 0 0 6.811.303l103.971-78.875c3.488-2.646 8.498-.158 8.498 4.22v-.306a8.001 8.001 0 0 0-4.529-7.208Z"></path>
              <g filter="url(#b)">
                  <path fill="#007ACC"
                      d="m123.471 114.181-26.374 12.698A7.973 7.973 0 0 1 88 125.333L1.662 46.613a5.333 5.333 0 0 1 .006-7.887l7.052-6.411a5.333 5.333 0 0 1 6.811-.303l103.971 78.874c3.488 2.647 8.498.159 8.498-4.219v.306a8.001 8.001 0 0 1-4.529 7.208Z"></path>
              </g>
              <g filter="url(#c)">
                  <path fill="#1F9CF0"
                      d="M97.098 126.882A7.977 7.977 0 0 1 88 125.333c2.952 2.952 8 .861 8-3.314V5.98c0-4.175-5.048-6.266-8-3.313a7.977 7.977 0 0 1 9.098-1.549L123.467 13.8A8 8 0 0 1 128 21.01v85.982a8 8 0 0 1-4.533 7.21l-26.369 12.681Z"></path>
              </g>
              <path fill="url(#d)" fill-rule="evenodd"
                  d="M90.69 127.126a7.968 7.968 0 0 0 6.349-.244l26.353-12.681a8 8 0 0 0 4.53-7.21V21.009a8 8 0 0 0-4.53-7.21L97.039 1.12a7.97 7.97 0 0 0-9.093 1.548l-50.45 46.026-21.974-16.68a5.328 5.328 0 0 0-6.807.302l-7.048 6.411a5.336 5.336 0 0 0-.006 7.888L20.718 64 1.662 81.386a5.335 5.335 0 0 0 .006 7.888l7.048 6.411a5.328 5.328 0 0 0 6.807.303l21.975-16.681 50.45 46.026a7.959 7.959 0 0 0 2.742 1.793Zm5.252-92.184L57.662 64l38.28 29.057V34.943Z"
                  clip-rule="evenodd" opacity="0.25" style="mix-blend-mode:overlay"></path>
          </g>
          <defs>
              <filter id="b" width="144.744" height="113.408" x="-8.41115" y="22.5944"
                  color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_1_36"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape"></feBlend>
              </filter>
              <filter id="c" width="56.6667" height="144.007" x="79.6667" y="-8.0035"
                  color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feColorMatrix in="SourceAlpha" result="hardAlpha"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                  <feOffset></feOffset>
                  <feGaussianBlur stdDeviation="4.16667"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
                  <feBlend in2="BackgroundImageFix" mode="overlay" result="effect1_dropShadow_1_36"></feBlend>
                  <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_36" result="shape"></feBlend>
              </filter>
              <linearGradient id="d" x1="63.9222" x2="63.9222" y1="0.329902" y2="127.67"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
              </linearGradient>
          </defs>
          </svg>`
        }
      },
      {
        name: 'Git',
        icon: {
          src: diGitOriginal
        }
      },
      {
        name: 'Arduino',
        icon: {
          src: diArduinoOriginal
        }
      },
      {
        name: 'Raspberry Pi',
        icon: {
          src: diRaspberrypiOriginal
        }
      },
    ]
  };

  readonly certificateList: Certificate[] = [
    {
      name: 'Angular (Basic)',
      institution: 'Hacker Rank',
      link: 'https://www.hackerrank.com/certificates/20d505b1bfa1'
    },
    {
      name: 'JavaScript (Basic)',
      institution: 'Hacker Rank',
      link: 'https://www.hackerrank.com/certificates/01977157754c'
    },
    {
      name: 'JavaScript (Intermediate) Certificate',
      institution: 'Hacker Rank',
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

  onPrint() {
    const originalTitle = document.title;

    window.onbeforeprint = () => document.title = `${this.personalInfo.fullName} - CV`;
    window.onafterprint = () => document.title = originalTitle;

    window.print();
  }
}
