export type PersonalInfo = {
  name: string;
  surname: string;
  fullName: string;
}

export type Contact = {
  shortLink: string;
  fullLink: string;
  icon: string,
};

export type WorkExperience = {
  period: {
    from: number;
    to: number | string;
  }
  jobTitle: string;
  employer: {
    name: string;
    website: string;
  };
  description?: string;
  details: string[];
}

export type Icon = {
  svg: string;
  title: string;
  color?: string;
  currentColorBypass?: boolean
}

export type Education = {
  period?: {
    from: number;
    to?: number;
  },
  qualification: {
    name: string,
    details?: string;
  },
  institution: {
    name: string;
    website?: string;
  };
  thesis: {
    name: string;
    link: string;
  }
}

export type Tool = {
  name: string;
  icon: {
    src: string;
    currentColorBypass?: boolean;
  },
}

export type Certificate = {
  name: string;
  institution: string;
  link: string;
}

export type Page = 'page1' | 'page2';
