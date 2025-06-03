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