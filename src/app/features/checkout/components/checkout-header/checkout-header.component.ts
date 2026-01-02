import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-header',
  standalone: true,
  templateUrl: './checkout-header.component.html'
})
export class CheckoutHeaderComponent {
  @Input() title = 'Review';
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
