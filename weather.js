class Weather {
  constructor(weather = ['sunny', 'sunny', 'stormy']){
    this.weather = weather;
  }

  forecast(){
    return this.weather[Math.floor(Math.random() * this.weather.length)];
  }

}

module.exports = Weather;
