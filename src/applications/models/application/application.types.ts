export interface Client {
  name: string
  surname?: string
  phoneNumber: string
  email?: string
}

export interface Vehicle {
  brand: string
  model: string
  yearOfIssue: string
  engineSpecification: string
  registrationNumber: string
  VIN: string
}

export interface Issues {
  description: string
}
