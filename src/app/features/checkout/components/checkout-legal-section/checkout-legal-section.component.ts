import { Component, EventEmitter, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-checkout-legal-section',
  standalone: true,
  imports: [NgClass],
  templateUrl: './checkout-legal-section.component.html'
})
export class CheckoutLegalSectionComponent {
  marketingConsent = false;

  @Output() continue = new EventEmitter<void>();

  toggleConsent() {
    this.marketingConsent = !this.marketingConsent;
  }


}
