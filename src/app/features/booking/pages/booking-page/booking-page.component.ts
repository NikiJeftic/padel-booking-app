import { Component, EventEmitter, Output } from '@angular/core';
import { BookingHeaderComponent } from '../../components/booking-header/booking-header.component';
import { DatePickerComponent } from '../../components/date-picker/date-picker.component';
import { TimePickerComponent } from '../../components/time-picker/time-picker.component';
import { AvailabilityToggleComponent } from '../../components/available-only-toggle/availability-toggle.component';
import { BookingSectionHeaderComponent } from '../../components/booking-section-header/booking-section-header.component';
import { CourtSelectionItemComponent } from '../../components/court-selection-item/court-selection-item.component';

@Component({
  selector: 'app-booking-page',
  imports: [BookingHeaderComponent, DatePickerComponent, AvailabilityToggleComponent, TimePickerComponent, BookingSectionHeaderComponent, CourtSelectionItemComponent],
  templateUrl: './booking-page.component.html',
  styleUrl: './booking-page.component.css'
})
export class BookingPageComponent {
  showAvailableSlotsOnly!: boolean;
  showAvailableCourtsOnly!: boolean;
  expandedIndex = 0;

  courts = [
    {
      id: 1,
      name: 'Padel 1 - Doubles',
      tags: ['Indoor', 'Crystal', 'Double'],
      pricing: [
        { price: 224, duration: '60 min' },
        { price: 336, duration: '90 min' },
        { price: 448, duration: '120 min' },
      ],
    },
    {
      id: 2,
      name: 'Padel 2 - Doubles',
      tags: ['Indoor', 'Crystal', 'Double'],
      pricing: [
        { price: 224, duration: '60 min' },
        { price: 336, duration: '90 min' },
        { price: 448, duration: '120 min' },
      ],
    },
    {
      id: 3,
      name: 'Padel 3 - Doubles',
      tags: ['Indoor', 'Crystal', 'Double'],
      pricing: [
        { price: 224, duration: '60 min' },
        { price: 336, duration: '90 min' },
        { price: 448, duration: '120 min' },
      ],
    },
  ];

  onPricingSelected(e: { courtId: number; price: number; duration: string }) {
    console.log("Selected pricing:", e);
  }

}
