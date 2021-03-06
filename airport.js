const Weather = require('./weather')

class Airport {
  constructor(capacity = 1, weather = new Weather()){
    this.hanger = [];
    this.capacity = capacity;
    this.weather = weather;
  }

  landPlane(plane){
    if(this.isPoorWeather()) { return 'The plane cannot land in poor weather conditions.' }
    this.hanger.push(plane);
    return this.isFullCapacity()
  }

  takeOff(){
    if(this.isPoorWeather()) { return 'The plane cannot leave the airport in poor weather conditions.' }
    this.hanger.pop();
    return `The plane has taken off succesfully, there are ${this.hanger.length} planes in the airport.`;
  }

  isFullCapacity(){
    if(this.hanger.length > this.capacity) {
      this.hanger.pop();
      return 'Airport is at full capacity';
    } else { return 'The plane has been landed safely.' };
  }

  isPoorWeather(){
    return this.weather.forecast() === 'stormy';
  }

}

module.exports = Airport;

