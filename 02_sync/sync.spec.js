const Lodash = require('./sync')

const _ = new Lodash()

describe('Lodash: compact', () => {
  const array = [false, 42, 0, '', true, null, 'hello']

  beforeEach(() => {
    array = [false, 42, 0, '', true, null, 'hello']
  })

  test('should be defined', () => {
    expect(_.compact).not.toBeUndefined()
    expect(_.compact).toBeDefined()
  })

  test('should remove falsy values from array', () => {
    const result = [42, true, 'hello']
    expect(_.compact(array)).toEqual(result)
  })

  test('should NOT contain falsy values', () => {
    expect(_.compact(array)).not.toContain(false)
    expect(_.compact(array)).not.toContain('false')
    expect(_.compact(array)).not.toContain(0)
    expect(_.compact(array)).not.toContain(null)
  })
})

describe('Lodash: groupBy', () => {
  test('should be defined', () => {
    expect(_.groupBy).not.toBeUndefined()
    expect(_.groupBy).toBeDefined()
  })
})