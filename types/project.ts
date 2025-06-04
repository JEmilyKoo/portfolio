export interface Project {
  title: string
  period: string
  role: string
  description: string
  metrics?: {
    label: string
    value: string
  }[]
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  image?: string[]
  video?: string
  troubleshooting?: {
    title: string
    content: Content[]
  }[]
  team: string
}

export interface Content {
  text?: string
  className?: string
  icon?: string
}
