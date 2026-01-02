
export interface LinkInfo {
  linkedin: string;
  github: string;
  portfolio_project?: string;
}

export interface BasicInfo {
  full_name: string;
  professional_title: string;
  location: string;
  email: string;
  phone: string;
  links: LinkInfo;
}

export interface WorkExperience {
  position: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  links?: {
    live_demo?: string;
    source_code?: string;
    video_demo?: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  graduation_date: string;
}

export interface CandidateData {
  basic_info: BasicInfo;
  professional_summary: string;
  technical_skills: Record<string, string[]>;
  work_experience: WorkExperience[];
  projects: Project[];
  education: Education;
  certifications: string[];
}
