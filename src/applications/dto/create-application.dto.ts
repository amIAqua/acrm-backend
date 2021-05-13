export class CreateApplicationDto {
  // client
  readonly name: string
  readonly surname?: string
  readonly phoneNumber: string
  readonly email?: string

  // vehicle
  readonly brand: string
  readonly model: string
  readonly yearOfIssue: string
  readonly registrationNumber: string
  readonly engineSpecification: string
  readonly VIN: string

  // Issues
  readonly description?: string
}
