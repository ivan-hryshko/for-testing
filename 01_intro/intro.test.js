const { sum, nativeNull } = require('./intro');

describe('Sum function:', () => {
  test('Should return sum of two function', () => {
    expect(sum(1, 3)).toBe(4)
    expect(sum(1, 3)).toBeGreaterThan(3)
    expect(sum(1, 3)).toBeGreaterThanOrEqual(4)
    expect(sum(1, 3)).toBeLessThan(5)
  })

  test('Should return sum of two float value', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})

describe('Native null function:', () => {
  test('Should be null', () => {
    expect(nativeNull()).toBe(null)
    expect(nativeNull()).toBeNull()
    expect(nativeNull()).toBeFalsy()
    expect(nativeNull()).toBeDefined()
    expect(nativeNull()).not.toBeTruthy()
  })
})


