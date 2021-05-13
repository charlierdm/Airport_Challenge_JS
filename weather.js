class Weather {
  constructor(){
    this.weather = ['sunny', 'sunny', 'stormy'];
  }

  forecast(){
    return this.weather[Math.floor(Math.random() * this.weather.length)];
  }

}

module.exports = Weather;
