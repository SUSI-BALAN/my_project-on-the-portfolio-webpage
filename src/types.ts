import type { IconType } from 'react-icons';

export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: IconType;
}

export interface SkillItem {
  name: string;
  icon: IconType;
  category: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveDemo: string;
  github: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  details: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  details: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  intro: string;
  about: string;
  profileImage: string;
  resumeFile: string;
  roles: string[];
  contact: ContactInfo;
  education: EducationItem[];
  experience: ExperienceItem[];
  socials: SocialLink[];
  skills: SkillItem[];
  projects: ProjectItem[];
}