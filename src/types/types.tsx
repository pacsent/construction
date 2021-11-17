export interface CompanyData {
  id: number
  name: string
  logoUrl: string
  specialties: Specialty[]
  location: string
  website: string
}

export const specialties = [
  "Scaffolding",
  "Earthmoving",
  "Electrical",
  "Project Engineering",
  "Plumbing",
  "Heating",
]

export type Specialty = typeof specialties[number]
