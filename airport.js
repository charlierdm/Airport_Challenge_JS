class Airport {
  constructor(capacity = 1){
    this.hanger = [];
    this.capacity = capacity;
  }

  landPlane(plane){
    this.hanger.push(plane);
    return 'The plane has been landed safely.';
  }

  takeOff(){
    this.hanger.pop();
    return `The plane has taken off succesfully, there are ${this.hanger.length} planes in the airport.`;
  }

}

module.exports = Airport;

