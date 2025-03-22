import { Component } from '@angular/core';
import { TranslocoDirective } from '@jsverse/transloco';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  remixPhoneLine,
  remixMailLine,
  remixLinksFill,
  remixHomeOfficeLine,
  remixLinkedinBoxFill,
  remixGithubFill
} from '@ng-icons/remixicon';
import { Contacts } from '../../../models/cv-data.model';

@Component({
  selector: 'app-contacts',
  imports: [
    TranslocoDirective,
    NgIcon
  ],
  providers: [
    provideIcons({
      remixPhoneLine,
      remixMailLine,
      remixLinksFill,
      remixHomeOfficeLine,
      remixLinkedinBoxFill,
      remixGithubFill
    })
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
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
}
