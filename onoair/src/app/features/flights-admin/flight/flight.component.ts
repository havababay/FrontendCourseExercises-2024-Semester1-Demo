import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { Flight } from '../../../model/flight';
import { FlightsService } from '../services/flights.service';
import { MatSelectModule } from '@angular/material/select';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DestinationsService } from '../../destinations-admin/destinations.service';
import { Destination } from '../../destinations-admin/destination';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { UniqueDestinationsValidatorDirective } from '../directives/unique-destinations-validator/unique-destinations-validator.directive';
import { Router } from '@angular/router';
import { LaterThenTodayDirective } from '../directives/later-then-today/later-then-today.directive';

@Component({
  selector: 'app-flight',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatSelectModule,
    MatTimepickerModule,
    MatDatepickerModule,
    MatButtonModule,
    LaterThenTodayDirective,
    UniqueDestinationsValidatorDirective
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css',
})
export class FlightComponent implements OnInit {
  @Input() id: string = '';

  flight: Flight = new Flight('', '', '', '', new Date(), new Date(), 0);
  destinationsData: Destination[] = []

  isFlightLoaded = false;
  isFlightExists = false;

  constructor(private flightsService: FlightsService,
    private destService: DestinationsService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.destinationsData = this.destService.list();

    if (this.id) {
      this.flightsService.get(this.id).then((tempFlight) => {
        if (tempFlight) {
          this.flight = tempFlight;
          this.isFlightExists = true;
        }

        this.isFlightLoaded = true;
      })
    }
  }

  submitFlight() 
  {
    if (!this.id) {
      this.flightsService.add(this.flight).then(() => {
        this.router.navigate(['/flights']);
      })
    } else {
      this.flightsService.update(this.flight).then(() => {
        this.router.navigate(['/flights']);
      })
    }
  }
}
