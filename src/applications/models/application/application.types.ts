export type VehicleType = {
  brand: string
  model: string
  yearOfIssue: string
  engineSpecification: string
  registrationNumber: string
  VIN: string
}

export type IssuesType = {
  description?: string
}

export enum Status {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  CLOSED = 'CLOSED',
}
