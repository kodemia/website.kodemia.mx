
export type Program = 'javascript-live'
export type BrochureFormat = 'desktop' | 'mobile'
export type BrochureVersion = '2021v1' | '2021v2'
export type Event = {
  name: string
  date: Date
  isLive: Boolean
  isPrivate: Boolean
  link: string
}
export type Mentor = {
  photography: string
  name: string
  jobTitle: string
  companyName: string
  yearsOfExperience: number
  github: string
  linkedin: string
  twitter: string
  description: string
  skills: Skill[]
}
export type Skill = {
  name: string
  color: string
}
