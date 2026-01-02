import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkout-primary-cta',
  imports: [NgClass],
  templateUrl: './checkout-primary-cta.html',
  styleUrl: './checkout-primary-cta.css',
})
export class CheckoutPrimaryCta {
  @Input() label = 'Continue payment';
  @Input() amount?: number;
  @Input() disabled = false;

  @Output() action = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.action.emit();
    }
  }
}
