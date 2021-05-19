const Airport = require('./airport');

jest.mock('./plane');
const Plane = require('./plane');

const sunnyWeather = {forecast : () => 'sunny'};

describe('FeatureTest', () => {
  let airport = new Airport(1, sunnyWeather);
  airport.landPlane(Plane);
  expect(airport.hanger).toContain(Plane)
  expect(airport.landPlane(Plane)).toEqual('Airport is at full capacity')
  airport.takeOff(Plane)
  expect(airport.hanger.length).toEqual(0)
})