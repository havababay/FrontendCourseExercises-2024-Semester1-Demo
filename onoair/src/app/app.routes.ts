import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { FlightsComponent } from './flights/flights.component';
import { FlightComponent } from './flight/flight.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'flights', component: FlightsComponent },
    { path: 'flight/:id', component: FlightComponent }
];
