const Airport = require('./airport')
const Plane = require('./plane')
jest.mock('./plane');


const airport = new Airport();

beforeEach(() => {
  Plane.mockClear();
});

test('the airport default capacity can be overridden as appropriate', () => {
  let newAirport = new Airport(capacity = 5);
  expect(newAirport.capacity).toBe(5);
});

test('the air traffic controller can instruct a plane to land at the airport', () => {
  airport.landPlane(Plane);
  expect(airport.hanger).toContain(Plane);
})

test('the air traffic controller can instruct a plane to take off and recieve confirmation', () => {
  expect(airport.takeOff()).toEqual(`The plane has taken off succesfully, there are 0 planes in the airport.`);
})

test('the airport will not accept planes landing if at maximum capacity', () => {
  let newAirport = new Airport(capacity = 5)
  for(let i = 0; i < newAirport.capacity; i++){
    newAirport.landPlane(Plane)
  }
  expect(newAirport.hanger.length).toEqual(5)
})

test('the plane is prevented from takeoff when the weather is stormy', () => {
  airport.landPlane(Plane)
  expect(airport.takeOff()).toEqual('The plane cannot leave the airport in poor weather conditions.')
})




