import { queryToModelFormat } from '../utils/string-queries'

describe('query string function', () => {
  it('accepts string and return correct changed string', () => {
    expect(queryToModelFormat('HELLOWORLD')).toBe('Helloworld')
  })
})
