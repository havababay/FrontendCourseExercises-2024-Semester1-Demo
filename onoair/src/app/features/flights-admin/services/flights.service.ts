import { Injectable } from '@angular/core';
import { Flight } from '../../../model/flight';
import { addDoc, collection, doc, Firestore, getDoc, getDocs, QuerySnapshot, setDoc } from '@angular/fire/firestore';
import { flightConverter } from './flights-converter';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  constructor(private firestoreService: Firestore) { }

  async list(): Promise<Flight[]> {
    const collectionConnection = collection(
      this.firestoreService,
      'flights'
    ).withConverter(flightConverter);

    const querySnapshot: QuerySnapshot<Flight> = await getDocs(
      collectionConnection
    )

    return querySnapshot.docs.map((doc) => doc.data());
  }

  async get(id: string): Promise<Flight | undefined> {
    const flightDocRef = doc(this.firestoreService, 'flights', id).withConverter(
      flightConverter
    );
    return (await getDoc(flightDocRef)).data();
  }

  async add(newFlightData: Flight) {
    await addDoc(collection(this.firestoreService, 'flights').withConverter(flightConverter), newFlightData);
  }

  async update(newFlightData: Flight) {
    const flightDocRef = doc(this.firestoreService, 'flights', newFlightData.id).withConverter(
      flightConverter
    );
    await setDoc(flightDocRef, newFlightData);
  }
}
