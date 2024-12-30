import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { Flight } from '../../../model/flight';
import { FlightsService } from '../../../services/flights.service';
import { MatSelectModule } from '@angular/material/select';
import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DestinationsService } from '../../destinations-admin/destinations.service';
import { Destination } from '../../destinations-admin/destination';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { UniqueDestinationsValidatorDirective } from '../unique-destinations-validator/unique-destinations-validator.directive';

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
    MatButtonModule
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css',
})
export class FlightComponent implements OnInit {
  @Input() id: string = '';

  flight: Flight = new Flight('', '', '', new Date(), new Date(), 0);
  destinationsData : Destination[] = []

  isFlightLoaded = false;
  isFlightExists = false;

  constructor(private flightsService: FlightsService,
    private destService : DestinationsService
  ) {}

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Initialize the component.
   *
   * If the id is given, we try to fetch the flight from the service.
   * If the flight exists, we set the `isFlightExists` flag to true.
   * We also set the `isFlightLoaded` flag to true.
   */
/******  66bd74f8-c242-486d-8452-22567a42ac30  *******/
  ngOnInit(): void {
    this.destinationsData = this.destService.list();

    if (this.id) {
      let tempFlight = this.flightsService.get(this.id);

      if (tempFlight) {
        this.flight = tempFlight;
        this.isFlightExists = true;
      }

      this.isFlightLoaded = true;
    }
  }
}
