class Weather {
  constructor(){
    this.weather = ['sunny', 'sunny', 'rainy'];
  }

  forecast(){
    return this.weather[Math.floor(Math.random() * this.weather.length)];
  }

}

module.exports = Weather;
