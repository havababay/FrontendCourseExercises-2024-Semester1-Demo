import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../../../services/flights.service';
import { Flight } from '../../../model/flight';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-flights',
  imports: [MatTableModule, MatButtonModule, CommonModule, RouterModule, MatIconModule],
  templateUrl: './flights.component.html',
  styleUrl: './flights.component.css',
})
export class FlightsComponent implements OnInit {
  flightsData: Flight[] = [];
  displayedColumns: string[] = [
    'flightNumber',
    'destinationCode',
    'originCode',
    'originTime',
    'destinationTime',
    'seats',
    'actions',
  ];

  constructor(private flightsService: FlightsService) {}

  ngOnInit(): void {
    this.flightsData = this.flightsService.list();
  }
}
