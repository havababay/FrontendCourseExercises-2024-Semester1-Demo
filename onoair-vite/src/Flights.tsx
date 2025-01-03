import { useEffect, useState } from "react";
import { listFlights } from "./firebase/flights/flights";
import { Flight } from "./model/Flight";

export default function Flights() {
  const [flights, setFlights] = useState<Flight[]>([]);
  useEffect(() => {
    listFlights().then((flights) => {
      setFlights(flights);
    });
  }, []);

  return (
    <div>
      <h1>Flights</h1>
      <div>{(flights.length > 0) ? flights.map((flight) => 
        <p key={flight.flightNumber}>{flight.flightNumber}</p>) : "No flights"}</div>
    </div>
  );
}
