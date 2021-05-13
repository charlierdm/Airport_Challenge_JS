const Airport = require('./airport')

const airport = new Airport();

test('the airport default capacity can be overridden as appropriate', () => {
  let newAirport = new Airport(capacity = 5)
  expect(newAirport.capacity).toBe(5);
});

