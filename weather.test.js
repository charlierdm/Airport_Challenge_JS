const Weather = require('./weather')

weather = new Weather();

test('it returns either sunny, or rainy randomly', () => {
  expect(weather.forecast()).toEqual('sunny' || 'rainy');
})