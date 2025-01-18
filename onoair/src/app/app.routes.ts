import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FlightsComponent } from './features/flights-admin/flights/flights.component';
import { FlightComponent } from './features/flights-admin/flight/flight.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'flight-new', component: FlightComponent },
  { path: 'flight/:id', component: FlightComponent },
];
