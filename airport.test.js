const Airport = require('./airport')
const Plane = require('./plane')

const airport = new Airport();

test('the airport default capacity can be overridden as appropriate', () => {
  let newAirport = new Airport(capacity = 5);
  expect(newAirport.capacity).toBe(5);
});

test('the air traffic controller can instruct a plane to land at the airport', () => {
  let plane = new Plane();
  airport.landPlane(plane);
  expect(airport.hanger.length).toEqual(1);
})

test('the air traffic controller can instruct a plane to take off and recieve confirmation', () => {
  expect(airport.takeOff()).toEqual(`The plane has taken off succesfully, there are 0 planes in the airport.`);
})

