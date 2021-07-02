import {
  IssuesType,
  VehicleType,
} from 'src/applications/models/application/application.types'
import { ClientType } from 'src/clients/models/client/client.types'

export type ApplicationType = {
  readonly vehicle: VehicleType
  readonly issues: IssuesType
}

export class CreateApplicationDto {
  readonly client: ClientType
  readonly vehicle: VehicleType
  readonly issues: IssuesType
  readonly closed: boolean
}
