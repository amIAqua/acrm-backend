export class NewApplicationDto {
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
