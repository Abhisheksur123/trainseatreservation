// src/app/seat-booking/seat-booking.component.ts
import { Component, OnInit } from '@angular/core';
import { SeatsService } from '../seats.service';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css']
})
export class SeatBookingComponent implements OnInit {
  seatCount: number = 1;
  bookedSeats: number[] = [];
  seats: boolean[] = [];

  constructor(private seatsService: SeatsService) { }

  ngOnInit(): void {
    this.seats = this.seatsService.getSeats();
  }

  bookSeats(): void {
    this.bookedSeats = this.seatsService.bookSeats(this.seatCount);
    this.seats = this.seatsService.getSeats();
  }
}

