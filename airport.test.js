const Airport = require('./airport')
const Plane = require('./plane');
const Weather = require('./weather');
jest.mock('./plane');
jest.mock('./weather')

describe('Airport', () => {

  let airport; 

  beforeEach(() => {
    airport = new Airport(weather = Weather);
    Plane.mockClear();
    Weather.mockClear()
  });

  it('has a default capacity that can be overridden as appropriate', () => {
    let newAirport = new Airport(capacity = 5);
    expect(newAirport.capacity).toBe(5);
  });

  it('allows the air traffic controller to instruct a plane to land at the airport', () => {
    airport.landPlane(Plane);
    expect(airport.hanger).toContain(Plane);
  })

  it('allows the air traffic controller to instruct a plane to take off and recieve confirmation', () => {
    expect(airport.takeOff()).toEqual(`The plane has taken off succesfully, there are 0 planes in the airport.`);
  })

  it('does not accept planes landing if at maximum capacity', () => {
    let newAirport = new Airport(capacity = 5)
    for(let i = 0; i < newAirport.capacity; i++){
      newAirport.landPlane(Plane)
    }
    expect(newAirport.hanger.length).toEqual(5)
  })

  describe('Stormy weather conditions', () => {

    it('prevents takeoff when the weather is stormy', () => {
      
      airport.landPlane(Plane)
      expect(airport.takeOff()).toEqual('The plane cannot leave the airport in poor weather conditions.')
    })
  
    test('prevents landing when the weather is stormy', () => {
      expect(airport.landPlane(Plane)).toEqual('The plane cannot land in poor weather conditions.')
    })
  })
})







