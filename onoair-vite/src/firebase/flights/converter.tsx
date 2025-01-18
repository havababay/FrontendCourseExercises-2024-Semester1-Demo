import { QueryDocumentSnapshot, SnapshotOptions, Timestamp } from "firebase/firestore";
import { Flight } from "../../model/Flight";

export const flightConverter = {
    toFirestore: (flight: Flight) => {
        return {
            flightNumber: flight.flightNumber,
            destinationCode: flight.destinationCode,
            originCode: flight.originCode,
            originTime: Timestamp.fromDate(flight.originTime),
            destinationTime: Timestamp.fromDate(flight.destinationTime),
            seats: flight.seats
        }
    },
    fromFirestore: (
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ) => {
        const data = snapshot.data(options);

        return new Flight(
            snapshot.id,
            data['flightNumber'],
            data['destinationCode'],
            data['originCode'],
            data['originTime'].toDate(),
            data['destinationTime'].toDate(),
            data['seats']
        );
    }
}