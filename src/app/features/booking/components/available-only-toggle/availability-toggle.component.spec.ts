import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailabilityToggleComponent } from './availability-toggle.component';


describe('AvailabilityToggleComponent', () => {
  let component: AvailabilityToggleComponent;
  let fixture: ComponentFixture<AvailabilityToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailabilityToggleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AvailabilityToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
