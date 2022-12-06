const { sum } = require('./intro');

test('Should return sum of two function', () => {
  expect(sum(1, 3)).toBe(4)
})