import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import *  as remixIcon from '@ng-icons/remixicon';
import { Contact } from '../../../models/cv-data.model';

@Component({
  selector: 'app-contacts',
  imports: [
    NgIcon
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent {
  readonly remixIcon = remixIcon;

  readonly contacts: Contact[] = [
      {
        shortLink: '+39 327 05 99 329',
        fullLink: 'tel:+393270599329',
        icon: remixIcon.remixPhoneLine
      },
      {
        shortLink: 'federico127001@gmail.com',
        fullLink: 'mailto:federico127001@gmail.com',
        icon: remixIcon.remixMailLine
      },
      {
        shortLink: 'vercel/federicotorsello',
        fullLink: 'https://website-federicotorsellos-projects.vercel.app',
        icon: remixIcon.remixLinksFill
      },
      {
        shortLink: 'linkedin/federicotorsello',
        fullLink: 'https://www.linkedin.com/in/federicotorsello',
        icon: remixIcon.remixLinkedinBoxFill
      },
      {
        shortLink: 'github/FedericoTorsello',
        fullLink: 'https://github.com/FedericoTorsello',
        icon: remixIcon.remixGithubFill
      }
  ];
}
