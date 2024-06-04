// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { SeatsService } from './seats.service';

@NgModule({
  declarations: [
    AppComponent,
    SeatBookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SeatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
