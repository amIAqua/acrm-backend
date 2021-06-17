import { getModelToken } from '@nestjs/sequelize'
import { Test } from '@nestjs/testing'
import { ApplicationsService } from '../applications.service'
import { Application } from '../models/application/application.model'
import { Status } from '../models/application/application.types'

describe('ApplicationsService', () => {
  let applicationsService: ApplicationsService

  const status = 'CREATED'

  const newApplication = {
    client: {
      name: 'Marius',
      surname: 'Toy',
      phoneNumber: '+123321',
      email: '',
    },
    vehicle: {
      brand: 'Toyota',
      model: 'Corolla',
      yearOfIssue: '2012',
      registrationNumber: '1221-RN-3',
      engineSpecification: '2.0',
      VIN: 'VIN',
    },
    issues: {
      description: 'description',
    },
  }

  const returnedApplication = {
    client: {
      name: 'Marius',
      surname: 'Toy',
      phoneNumber: '+123321',
      email: '',
    },
    vehicle: {
      brand: 'Toyota',
      model: 'Corolla',
      yearOfIssue: '2012',
      registrationNumber: '1221-RN-3',
      engineSpecification: '2.0',
      VIN: 'VIN',
    },
    issues: {
      description: 'description',
    },
    status: Status.CREATED,
  }

  const mockedApplicationsRepozitory = {
    create: jest.fn().mockImplementation(() =>
      Promise.resolve({
        ...newApplication,
        status,
      }),
    ),
    findByPk: jest
      .fn()
      .mockImplementation(() =>
        Promise.resolve({ ...returnedApplication, id: 1 }),
      ),
  }

  beforeEach(async () => {
    const serviceRef = await Test.createTestingModule({
      providers: [
        ApplicationsService,
        {
          provide: getModelToken(Application),
          useValue: mockedApplicationsRepozitory,
        },
      ],
    }).compile()

    applicationsService =
      serviceRef.get<ApplicationsService>(ApplicationsService)
  })

  it('should be defined', () => {
    expect(applicationsService).toBeDefined()
  })

  describe('createNewApplication', () => {
    it('should be defined', () => {
      expect(applicationsService.createNewApplication).toBeDefined()
    })

    it('creates new application', async () => {
      expect(
        await applicationsService.createNewApplication(
          newApplication,
          Status.CREATED,
        ),
      ).toEqual(returnedApplication)
    })
  })

  describe('findByPkWithClient', () => {
    it('should be defined', () => {
      expect(applicationsService.findByPkWithClient).toBeDefined()
    })

    it('returns application by pk with client', async () => {
      expect(await applicationsService.findByPkWithClient(1)).toEqual({
        ...returnedApplication,
        id: 1,
      })
      const application = await applicationsService.findByPkWithClient(1)

      expect(application.id).toBe(1)
    })
  })
})
