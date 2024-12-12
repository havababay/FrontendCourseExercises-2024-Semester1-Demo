import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flight',
  imports: [],
  templateUrl: './flight.component.html',
  styleUrl: './flight.component.css'
})
export class FlightComponent {
  @Input() id: string = '';
}
