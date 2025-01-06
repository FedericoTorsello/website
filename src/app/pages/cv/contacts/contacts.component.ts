import { Component, input } from '@angular/core';
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
    readonly contacts = input.required<Contacts>();
}
