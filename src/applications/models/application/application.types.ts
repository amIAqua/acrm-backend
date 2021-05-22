export interface IClient {
  name: string
  surname?: string
  phoneNumber: string
  email?: string
}

export interface IVehicle {
  brand: string
  model: string
  yearOfIssue: string
  engineSpecification: string
  registrationNumber: string
  VIN: string
}

export interface Issues {
  description?: string
}
