class Booking {
    constructor(flightCode, passengers) {
        this.flightCode = flightCode;    
        this.passengers = passengers;    
    }

  get getPassengersNo() {
    return this.passengers.length;
  }
}