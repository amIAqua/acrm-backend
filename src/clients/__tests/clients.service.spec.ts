import { getModelToken } from '@nestjs/sequelize'
import { Test } from '@nestjs/testing'
import { ClientsService } from '../clients.service'
import { Client } from '../models/client/client.model'

describe('ClientsService', () => {
  let clientsService: ClientsService

  const client = {
    name: 'Marius',
    surname: 'Toy',
    phoneNumber: '+123321',
    email: '',
  }

  const mockedClientsRepozitory = {
    create: jest.fn().mockImplementation((client) =>
      Promise.resolve({
        id: 1,
        ...client,
      }),
    ),
    findByPk: jest.fn().mockImplementation((pk: number) =>
      Promise.resolve({
        id: pk,
        ...client,
      }),
    ),
    findAll: jest.fn().mockImplementation((query) =>
      Promise.resolve([
        {
          id: 1,
          name: 'Marius',
          surname: query,
          phoneNumber: '+123321',
          email: '',
        },
      ]),
    ),
  }

  beforeEach(async () => {
    const serviceRef = await Test.createTestingModule({
      providers: [
        ClientsService,
        {
          provide: getModelToken(Client),
          useValue: mockedClientsRepozitory,
        },
      ],
    }).compile()

    clientsService = serviceRef.get<ClientsService>(ClientsService)
  })

  it('should be defined', () => {
    expect(clientsService).toBeDefined()
  })

  describe('createNewClient', () => {
    it('should be defined', () => {
      expect(clientsService.createNewClient).toBeDefined()
    })

    it('should create and return new client', async () => {
      expect(await clientsService.createNewClient(client)).toEqual({
        id: 1,
        name: 'Marius',
        surname: 'Toy',
        phoneNumber: '+123321',
        email: '',
      })
    })
  })

  describe('getClientByPk', () => {
    it('should be defined', () => {
      expect(clientsService.getClientByPk).toBeDefined()
    })

    it('should find and return client by pk', async () => {
      expect(await clientsService.getClientByPk(1)).toEqual({
        id: 1,
        name: 'Marius',
        surname: 'Toy',
        phoneNumber: '+123321',
        email: '',
      })
    })
  })

  describe('getClientApplications', () => {
    it('should be defined', () => {
      expect(clientsService.getClientApplications).toBeDefined()
    })
  })
})
