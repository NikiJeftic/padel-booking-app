import { DatePipe, NgClass } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  imports: [DatePipe, NgClass],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {
  dates: Date[] = [];
  selectedDate: Date = new Date();

  @Output() dateSelected = new EventEmitter<Date>();

  constructor() {
    this.generateDates(120);
  }

  generateDates(days: number) {
    const today = new Date();
    for (let i = 0; i < days; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      this.dates.push(date);
    }
  }

  selectDate(date: Date) {
    this.selectedDate = date;
    this.dateSelected.emit(date);
  }

  isNewMonth(index: number): boolean {
    if (index === 0) return false;
    return this.dates[index].getMonth() !== this.dates[index - 1].getMonth();
  }

}
