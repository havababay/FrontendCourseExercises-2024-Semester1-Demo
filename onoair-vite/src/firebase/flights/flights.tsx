import { addDoc, collection, doc, getDoc, getDocs, QuerySnapshot, setDoc } from "firebase/firestore";
import { Flight } from "../../model/Flight";
import { firestore } from "../config";
import { flightConverter } from "./converter";

export const addFlight = async (flight: Flight) => {
    addDoc(collection(firestore, 'flights').withConverter(flightConverter), flight);
};

export const listFlights = async () => {
    const flightsCollection = collection(
        firestore,
        'flights'
      ).withConverter(flightConverter);
  
      const querySnapshot: QuerySnapshot<Flight> = await getDocs(
        flightsCollection
      )
  
      return querySnapshot.docs.map((doc) => doc.data());
};

export const getFlight = async (id: string) => {
    const flightDocRef = doc(firestore, 'flights', id).withConverter(flightConverter);
    return (await getDoc(flightDocRef)).data();
};

export const updateFlight = async (flight: Flight) => {
    const flightDocRef = doc(firestore, 'flights', flight.id).withConverter(flightConverter);
    await setDoc(flightDocRef, flight);
};