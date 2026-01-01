import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-booking-section-header',
  templateUrl: './booking-section-header.component.html'
})
export class BookingSectionHeaderComponent {
  @Input() title = '';
  @Input() subtitle = '';
}
