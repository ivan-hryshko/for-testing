const { map } = require('./mock')

describe('Map function', () => {
  let array
  let func

  beforeEach(() => {
    array = [1, 2, 3, 5]
    func = jest.fn(x => x ** 2)
    map(array, func)
  })

  test('should call callback', () => {
    expect(func).toBeCalled()
  })

  test('should call callback 4 times', () => {
    expect(func).toBeCalledTimes(4)
    expect(func.mock.calls.length).toBe(4)
  })

  test('should pow 2 each element', () => {
    expect(func.mock.results[0].value).toBe(1)
    expect(func.mock.results[1].value).toBe(4)
    expect(func.mock.results[2].value).toBe(9)
    expect(func.mock.results[3].value).toBe(25)
  })

  test('should func work', () => {
    func
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue('42')
    expect(func()).toBe(100)
    expect(func()).toBe(200)
    expect(func()).toBe('42')
    expect(func()).toBe('42')
  })
})