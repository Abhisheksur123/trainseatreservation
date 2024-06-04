// src/app/seats.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  private seats: boolean[] = Array(80).fill(false); // false means the seat is available

  constructor() { }

  getSeats(): boolean[] {
    return this.seats;
  }

  bookSeats(count: number): number[] {
    let bookedSeats: number[] = [];
    // Attempt to book seats in the same row
    for (let row = 0; row < 11; row++) {
      const start = row * 7;
      const end = start + 7;
      const rowSeats = this.seats.slice(start, end);
      const availableSeats = rowSeats.reduce((acc, seat, index) => {
        if (!seat) acc.push(index);
        return acc;
      }, [] as number[]);
      if (availableSeats.length >= count) {
        for (let i = 0; i < count; i++) {
          const seatIndex = start + availableSeats[i];
          this.seats[seatIndex] = true;
          bookedSeats.push(seatIndex);
        }
        return bookedSeats;
      }
    }
    // Book nearby seats if not enough in a row
    for (let i = 0; i < this.seats.length; i++) {
      if (!this.seats[i]) {
        this.seats[i] = true;
        bookedSeats.push(i);
        if (bookedSeats.length === count) return bookedSeats;
      }
    }
    return bookedSeats;
  }
}
