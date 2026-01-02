import { Component, inject } from '@angular/core';
import { CheckoutHeaderComponent } from '../../components/checkout-header/checkout-header.component';
import { Router } from '@angular/router';
import { PaymentOptionComponent } from '../../components/payment-option/payment-option.component';
import { CheckoutLegalSectionComponent } from '../../components/checkout-legal-section/checkout-legal-section.component';
import { CheckoutPrimaryCta } from '../../components/checkout-primary-cta/checkout-primary-cta';

@Component({
  selector: 'app-checkout-page',
  imports: [CheckoutHeaderComponent, PaymentOptionComponent, CheckoutLegalSectionComponent, CheckoutPrimaryCta],
  templateUrl: './checkout-page.component.html',
  styleUrl: './checkout-page.component.css'
})
export class CheckoutPageComponent {
  private router = inject(Router);
  paymentType: 'split' | 'full' = 'full';

  onCloseCheckout() {
    this.router.navigate(['/booking'], {
      queryParamsHandling: 'preserve'
    });
  }

  onContinue() {
  }
}
