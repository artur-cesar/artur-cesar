export interface ExperienceData {
    title: string
    employer: string
    startDate: Date
    endDate: Date | null
    isCurrentPosition: boolean
    state: string
    country: string
    city: string
    description: string
    skills: string[]
}

export interface BlogPost {
  title: string
  description: string
  image: string
  url: string
}

export interface Repo {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    updated_at: Date;
}

export interface GithubRepoResponse {
    id: number;
    name: string;
    full_name: string;
    private: boolean;
    html_url: string;
    description: string;
    language: string;
    stargazers_count: number;
    updated_at: Date;
}