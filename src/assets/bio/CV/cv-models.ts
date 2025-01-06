// src/app/models/experience.model.ts
export interface Experience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

// src/app/models/skill.model.ts
export interface Skill {
  name: string;
  level: 'Principiante' | 'Intermedio' | 'Avanzato';
  category: 'Tecnica' | 'Soft Skill';
}
