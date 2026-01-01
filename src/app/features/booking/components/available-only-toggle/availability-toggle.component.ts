import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-availability-toggle',
  standalone: true,
  imports: [NgClass],
  templateUrl: './availability-toggle.component.html'
})
export class AvailabilityToggleComponent {
  @Input() label = '';
  value = signal(true);

  @Output() valueChange = new EventEmitter<boolean>();

  toggle() {
    this.value.set(!this.value());
    this.valueChange.emit(this.value());
  }
}
