// src/app/components/experience/experience.component.ts
import { Component, OnInit } from '@angular/core';
import { CvService } from '../../services/cv.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  template: `
    <div class="experience-section">
      <h2>Esperienza Professionale</h2>
      <div *ngFor="let exp of experiences" class="experience-item">
        <h3>{{ exp.position }} - {{ exp.company }}</h3>
        <p class="period">{{ exp.period }}</p>
        <ul>
          <li *ngFor="let resp of exp.responsibilities">
            {{ resp }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit() {
    this.experiences = this.cvService.getExperiences();
  }
}
