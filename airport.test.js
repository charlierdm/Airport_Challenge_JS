const Airport = require('./airport')

const airport = new Airport();

test('test setup', () => {
  expect(airport.capacity).toBe(1);
});

