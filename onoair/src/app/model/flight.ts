export class Flight {
    constructor(
        public flightNumber : string,
        public destinationCode : string, 
        public originCode : string, 
        public originTime : Date, 
        public destinationTime : Date, 
        public seats : number) {
    }
}