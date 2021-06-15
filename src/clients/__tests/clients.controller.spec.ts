import { Test } from '@nestjs/testing'
import { Status } from 'src/applications/models/application/application.types'
import { ClientsController } from '../clients.controller'
import { ClientsService } from '../clients.service'

describe('ClientsController', () => {
  let clientsController: ClientsController
  const returnedClients = [
    {
      id: 1,
      name: 'Anton',
      surname: 'Petrov',
      phoneNumber: '+123321',
      email: '',
    },
  ]

  const clientWithApplications = [
    {
      id: 1,
      name: 'Anton',
      surname: 'Petrov',
      phoneNumber: '+123321',
      email: '',
      applications: [
        {
          id: 1,
          clientId: 1,
          client: {
            id: 1,
            name: 'Anton',
            surname: 'Petrov',
            phoneNumber: '+123321',
            email: '',
          },
          vehicle: {},
          issues: {},
          status: Status.CREATED,
        },
      ],
    },
  ]

  const mockedUserService = {
    getClientsBySearchQuery: jest.fn((query) => returnedClients),
    getClientApplications: jest.fn((clientId) => clientWithApplications),
  }

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [ClientsController],
      providers: [ClientsService],
    })
      .overrideProvider(ClientsService)
      .useValue(mockedUserService)
      .compile()

    clientsController = moduleRef.get<ClientsController>(ClientsController)
  })

  describe('ClientsController', () => {
    it('should be defined', () => {
      expect(clientsController).toBeDefined()
    })

    describe('getClientsByQuery', () => {
      it('should be defined', () => {
        expect(clientsController.getClientsByQuery).toBeDefined()
      })

      it('should return client by given query', async () => {
        const query = 'Petrov'

        expect(clientsController.getClientsByQuery({ query })).toEqual(
          returnedClients,
        )
      })
    })

    describe('getClientApplications', () => {
      it('should be defined', () => {
        expect(clientsController.getClientApplications).toBeDefined()
      })

      it('should return client with applications', async () => {
        expect(
          clientsController.getClientApplications({ clientId: '1' }),
        ).toEqual(clientWithApplications)
      })
    })
  })
})
