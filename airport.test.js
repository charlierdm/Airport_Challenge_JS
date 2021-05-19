const Airport = require('./airport')

jest.mock('./plane');
const Plane = require('./plane');

const stormyWeather = {forecast : () => 'stormy'}
const sunnyWeather = {forecast : () => 'sunny'}

describe('Airport', () => {

  it('has a default capacity that can be overridden as appropriate', () => {
    let airport = new Airport(5, sunnyWeather);
    expect(airport.capacity).toBe(5);
  });

  it('allows the air traffic controller to instruct a plane to land at the airport', () => {
    let airport = new Airport(1, sunnyWeather)
    airport.landPlane(Plane);
    expect(airport.hanger).toContain(Plane);
  })

  it('allows the air traffic controller to instruct a plane to take off and recieve confirmation', () => {
    let airport = new Airport(1, sunnyWeather)
    airport.landPlane(Plane);
    expect(airport.takeOff()).toEqual(`The plane has taken off succesfully, there are 0 planes in the airport.`);
  })

  it('does not accept planes landing if at maximum capacity', () => {
    let airport = new Airport(5, sunnyWeather)
    for(let i = 0; i < airport.capacity; i++){
      airport.landPlane(Plane)
    }
    expect(airport.hanger.length).toEqual(5)
  })

  describe('Stormy weather conditions', () => {

    it('prevents takeoff when the weather is stormy', () => {
      let airport = new Airport(1, stormyWeather)
      airport.landPlane(Plane)
      expect(airport.takeOff()).toEqual('The plane cannot leave the airport in poor weather conditions.')
    })
  
    test('prevents landing when the weather is stormy', () => {
      let airport = new Airport(1, stormyWeather)
      expect(airport.landPlane(Plane)).toEqual('The plane cannot land in poor weather conditions.')
    })
  })
})







