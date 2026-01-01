import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-court-selection-item',
  standalone: true,
  imports: [NgClass],
  templateUrl: './court-selection-item.component.html'
})
export class CourtSelectionItemComponent {

  @Input() court: any;
  @Input() expanded = false;
  @Output() expandedChange = new EventEmitter<void>();

  @Output() pricingSelected = new EventEmitter<{
    courtId: number;
    price: number;
    duration: string;
  }>();

  toggle() {
    this.expanded = !this.expanded;
    this.expandedChange.emit();
  }

  selectPricing(price: number, duration: string) {
    this.pricingSelected.emit({ courtId: this.court.id, price, duration });
  }
}
