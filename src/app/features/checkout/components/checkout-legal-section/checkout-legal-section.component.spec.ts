import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutLegalSectionComponent } from './checkout-legal-section.component';


describe('CheckoutLegalSectionComponent', () => {
  let component: CheckoutLegalSectionComponent;
  let fixture: ComponentFixture<CheckoutLegalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckoutLegalSectionComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckoutLegalSectionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
