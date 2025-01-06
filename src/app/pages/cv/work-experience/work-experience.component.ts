import { AfterViewInit, Component, ElementRef, viewChildren, input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  remixCheckboxCircleFill,
} from '@ng-icons/remixicon';
import { WorkExperience } from '../../../models/cv-data.model';

@Component({
  selector: 'app-work-experience',
  imports: [
    NgIcon,
  ],
  providers: [
    provideIcons({
      remixCheckboxCircleFill
    })
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  readonly workExperienceContentList = viewChildren<ElementRef>('workExperienceContent');

  readonly timeline = input(true);

  readonly workExperienceList = input<WorkExperience[]>();
}
