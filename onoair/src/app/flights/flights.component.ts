import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';
import { Flight } from '../model/flight';
import { FlightComponent } from '../flight/flight.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-flights',
  imports: [FlightComponent, CommonModule, MatButtonModule],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css'
})
export class FlightsComponent implements OnInit{
  flightsData : Flight[] = [];
  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
    this.flightsData = this.flightsService.list();
  }

  addFlight() {
    this.flightsData.push(new Flight('40', 'LHR', 'JFK', new Date('2023-01-01 09:00'), new Date('2023-01-01 11:00'), 100));
  }
}
