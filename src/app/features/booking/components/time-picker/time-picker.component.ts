import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-time-picker',
  standalone: true,
  imports: [NgClass],
  templateUrl: './time-picker.component.html'
})
export class TimePickerComponent {
  @Output() timeSelected = new EventEmitter<string>();

  times: string[] = [];
  selectedTime: string | null = null;

  constructor() {
    this.generateTimes('08:00', '22:30', 30);
  }

  generateTimes(start: string, end: string, interval: number) {
    let [hour, minute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);

    while (hour < endHour || (hour === endHour && minute <= endMinute)) {
      const formatted = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      this.times.push(formatted);

      minute += interval;
      if (minute >= 60) {
        minute = 0;
        hour++;
      }
    }
  }

  selectTime(time: string) {
    this.selectedTime = time;
    this.timeSelected.emit(time);
  }
}
