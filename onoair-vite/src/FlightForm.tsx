import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Flight } from "./model/Flight";
import { addFlight } from "./firebase/flights/flights";

export default function FlightForm() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [flightNumber, setFlightNumber] = useState("");
  const [destinationCode, setDestinationCode] = useState("");
  const [originCode, setOriginCode] = useState("");
  const [originTime, setOriginTime] = useState<Dayjs | null>(null);
  const [destinationTime, setDestinationTime] = useState<Dayjs | null>(null);
  const [seats, setSeats] = useState("");

  const isFormValid = () => {
    return (
      flightNumber &&
      destinationCode &&
      originCode &&
      originTime &&
      destinationTime &&
      seats
    );
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (isFormValid()) {
      const flight = new Flight(
        id ?? "",
        flightNumber,
        destinationCode,
        originCode,
        originTime!.toDate(),
        destinationTime!.toDate(),
        parseInt(seats)
      );

      addFlight(flight).then(() => {
        navigate("/flights");
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>
          {!id ? "Add Flight" : "Edit Flight No. " + id}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Flight Number"
              value={flightNumber}
              onChange={(e) => setFlightNumber(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Destination Code"
              value={destinationCode}
              onChange={(e) => setDestinationCode(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Origin Code"
              value={originCode}
              onChange={(e) => setOriginCode(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Origin Time"
                value={originTime}
                onChange={setOriginTime}
                referenceDate={dayjs("2022-04-17T15:30")}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Destination Time"
                value={destinationTime}
                onChange={setDestinationTime}
                referenceDate={dayjs("2022-04-17T15:30")}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Seats"
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              required
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          disabled={!isFormValid()}
        >
          Save
        </Button>
      </form>
    </div>
  );
}
