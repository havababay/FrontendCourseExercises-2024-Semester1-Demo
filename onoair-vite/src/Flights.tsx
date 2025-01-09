import { useEffect, useState } from "react";
import { listFlights } from "./firebase/flights/flights";
import { Flight } from "./model/Flight";
import LinearProgress from "@mui/material/LinearProgress";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import { Button } from "@mui/material";
import "./Flights.css";

export default function Flights() {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    listFlights().then((flights) => {
      setFlights(flights);
      setLoading(false);
    });
  }, []);

  const options : Intl.DateTimeFormatOptions= { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true 
  };

  return (
    <div>
      {loading ? (
        <LinearProgress />
      ) : (
        <div>
          <h1>Flights</h1>
          <div>
            {flights.length > 0 ? (
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Flight Number</TableCell>
                      <TableCell>Destination Code</TableCell>
                      <TableCell>Origin Code</TableCell>
                      <TableCell>Origin Time</TableCell>
                      <TableCell>Destination Time</TableCell>
                      <TableCell>Seats</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {flights.map((flight) => (
                      <TableRow key={flight.flightNumber}>
                        <TableCell>{flight.flightNumber}</TableCell>
                        <TableCell>{flight.destinationCode}</TableCell>
                        <TableCell>{flight.originCode}</TableCell>
                        <TableCell>
                          {flight.originTime.toLocaleDateString("en-US", options)}
                        </TableCell>
                        <TableCell>
                          {flight.destinationTime.toLocaleDateString("en-US", options)}
                        </TableCell>
                        <TableCell>{flight.seats}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              "No flights"
            )}
            <div className="button-container">
              <Button variant="contained" href="/flight-new">
                Add Flight
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
