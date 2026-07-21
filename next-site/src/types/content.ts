export type NavLink = {
  to: string
  label: string
}

export type Service = {
  slug: string
  title: string
  summary: string
  details: string[]
  bullets: string[]
}

export type Client = {
  name: string
  description: string
}

export type Job = {
  slug: string
  title: string
  type: string
  salary: string
  postingDate: string
  openings: string
  location: string
  duties: string
  education: string
  experience: string
}
