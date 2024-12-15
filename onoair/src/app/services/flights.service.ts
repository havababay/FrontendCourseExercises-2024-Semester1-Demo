import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightsService {
  private flights: Flight[] = [
    new Flight(
      '1',
      'LHR',
      'JFK',
      new Date('2023-01-01 09:00'),
      new Date('2023-01-01 11:00'),
      100
    ),
    new Flight(
      '2',
      'CDG',
      'JFK',
      new Date('2023-01-02 09:00'),
      new Date('2023-01-02 11:00'),
      100
    ),
    new Flight(
      '3',
      'LHR',
      'JFK',
      new Date('2023-01-03 09:00'),
      new Date('2023-01-03 11:00'),
      100
    ),
    new Flight(
      '40',
      'LHR',
      'JFK',
      new Date('2023-01-04 09:00'),
      new Date('2023-01-04 11:00'),
      100
    ),
    new Flight(
      '5',
      'LHR',
      'JFK',
      new Date('2023-01-05 09:00'),
      new Date('2023-01-05 11:00'),
      100
    ),
  ];
  constructor() {}

  list = (): Flight[] => this.flights;

  get = (id: string): Flight | undefined =>
    this.flights.find((f) => f.flightNumber == id);
}
