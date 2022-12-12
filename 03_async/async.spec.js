const axios = require('axios')
const Ajax = require('./async')

jest.mock('axios')

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
      expect(error.message).toBe('error')

    }
  })
})

describe('Ajax: GET', () => {
  let response
  let todos

  beforeEach(() => {
    todos = [
      { id: 1, title: 'Todo 1', completed: false }
    ]
    response = {
      data: {
        todos,
      }
    }

  })

  test('should retunr data from backend', () => {
    axios.get.mockReturnValue(response)
    return Ajax.get().then(data => {
      console.log('data.todos :>> ', data.todos);
      expect(data.todos).toEqual(todos)
    })
  })
})
