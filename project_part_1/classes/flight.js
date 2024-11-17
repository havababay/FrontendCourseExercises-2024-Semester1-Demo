export class Flight {
    constructor(flightNumber, destinationCode, originCode, originTime, destinationTime, seats) {
        this.flightNumber = flightNumber;
        this.originCode = originCode;
        this.destinationCode = destinationCode;
        this.originTime = originTime;
        this.destinationTime = destinationTime;
        this.seats = seats;
    }
}