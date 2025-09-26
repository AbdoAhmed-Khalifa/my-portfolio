// Global type definitions for the portfolio
export interface NavLink {
  id: number;
  name: string;
  href: string;
}

export interface Project {
  title: string;
  desc: string;
  subdesc: string;
  href?: string;
  github?: string;
  texture: string;
  logo: string;
  logoStyle: {
    backgroundColor: string;
    border: string;
    boxShadow: string;
  };
  spotlight: string;
  tags: ProjectTag[];
}

export interface ProjectTag {
  id: number;
  name: string;
  path: string;
}

export interface WorkExperience {
  id: number;
  name: string;
  pos: string;
  duration: string;
  title: string;
  icon: string;
  animation: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface ClientReview {
  id: number;
  name: string;
  position: string;
  img: string;
  review: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface SizeConfig {
  deskScale: number;
  deskPosition: number[];
  cubePosition: number[];
  reactLogoPosition: number[];
  ringPosition: number[];
  targetPosition: number[];
}