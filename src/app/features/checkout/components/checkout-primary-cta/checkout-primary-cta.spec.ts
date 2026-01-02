import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutPrimaryCta } from './checkout-primary-cta';

describe('CheckoutPrimaryCta', () => {
  let component: CheckoutPrimaryCta;
  let fixture: ComponentFixture<CheckoutPrimaryCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutPrimaryCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckoutPrimaryCta);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
