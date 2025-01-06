import { Component, input } from '@angular/core';
import { Education } from '../../../models/cv-data.model';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  readonly educationList = input.required<Education[]>();
}
