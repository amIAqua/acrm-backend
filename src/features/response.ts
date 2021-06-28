import { HttpException, HttpStatus } from '@nestjs/common'

type ResponseType<D> = {
  status: HttpStatus
  data: D
}

export const response = <D>(status: HttpStatus, data: D): ResponseType<D> => ({
  status,
  data,
})

export const error = (message: string, status: HttpStatus) =>
  new HttpException(message, status)
