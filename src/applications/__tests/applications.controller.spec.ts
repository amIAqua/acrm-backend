import { Test } from '@nestjs/testing'
import { ApplicationsController } from '../applications.controller'
import { ApplicationsService } from '../applications.service'

describe('ApplicationsController', () => {
  let applicationsController: ApplicationsController
  const mockedApplicationsService = {}

  beforeEach(async () => {
    const controllerRef = await Test.createTestingModule({
      controllers: [ApplicationsController],
      providers: [ApplicationsService],
    })
      .overrideProvider(ApplicationsService)
      .useValue(mockedApplicationsService)
      .compile()

    applicationsController = controllerRef.get<ApplicationsController>(
      ApplicationsController,
    )
  })

  it('should be defined', () => {
    expect(applicationsController).toBeDefined()
  })
})
