import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-payment-option',
  imports: [NgClass],
  templateUrl: './payment-option.component.html',
  styleUrl: './payment-option.component.css'
})
export class PaymentOptionComponent {
  @Input() selected: 'split' | 'full' | 'location' = 'full';
  @Output() selectedChange = new EventEmitter<'split' | 'full' | 'location'>();


  select(value: 'split' | 'full' | 'location') {
    this.selected = value;
    this.selectedChange.emit(value);
  }
}
