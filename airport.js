const Weather = require('./weather')

class Airport {
  constructor(capacity = 1){
    this.hanger = [];
    this.capacity = capacity;
    this.weather = new Weather();
  }

  landPlane(plane){
    if(this.isPoorWeather()) { return 'The plane cannot land in poor weather conditions.' }
    this.isFullCapacity()
    this.hanger.push(plane);
    return 'The plane has been landed safely.';
  }

  takeOff(){
    if(this.isPoorWeather()) { return 'The plane cannot leave the airport in poor weather conditions.' }
    this.hanger.pop();
    return `The plane has taken off succesfully, there are ${this.hanger.length} planes in the airport.`;
  }

  isFullCapacity(){
    if(this.hanger.length === this.capacity) { return 'Airport is at full capacity' }
  }

  isPoorWeather(){
    return this.weather.forecast() === 'stormy'
  }

}

module.exports = Airport;


