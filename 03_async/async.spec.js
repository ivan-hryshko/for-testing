const Ajax = require('./async')

describe('Ajax: echo', () => {
  test('should return async data', async () => {
    const data = 'some data'
    const result = await Ajax.echo(data)
    expect(result).toBe(data)
  })

  test('should catch error with promise', () => {
    const data = 'some data'
    return Ajax.echo().catch(error => {
      expect(error).toBeInstanceOf(Error)
    })
  })

  test('should catch error with async data', async () => {
    const data = 'some data'
    try {
      await Ajax.echo()
    } catch(error) {
      expect(error.message).toBe('error 2')

    }
  })
})