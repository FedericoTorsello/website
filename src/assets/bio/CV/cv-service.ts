// src/app/services/cv.service.ts
import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  getExperiences(): Experience[] {
    return [
      {
        company: 'TechInnovate Solutions',
        position: 'Senior Angular Developer',
        period: 'Gen 2020 - Presente',
        responsibilities: [
          'Sviluppo applicazioni web enterprise con Angular',
          'Implementazione architetture front-end scalabili',
          'Ottimizzazione performance applicative'
        ]
      },
      {
        company: 'Digital Dynamics',
        position: 'Angular Developer',
        period: 'Giu 2018 - Dic 2019',
        responsibilities: [
          'Sviluppo applicazioni web responsive',
          'Creazione componenti Angular riutilizzabili',
          'Integrazione servizi autenticazione'
        ]
      }
    ];
  }

  getSkills(): Skill[] {
    return [
      { name: 'Angular', level: 'Avanzato', category: 'Tecnica' },
      { name: 'TypeScript', level: 'Avanzato', category: 'Tecnica' },
      { name: 'RxJS', level: 'Intermedio', category: 'Tecnica' },
      { name: 'Comunicazione', level: 'Avanzato', category: 'Soft Skill' }
    ];
  }
}
