import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSectionHeaderComponent } from './booking-section-header.component';

describe('BookingSectionHeaderComponent', () => {
  let component: BookingSectionHeaderComponent;
  let fixture: ComponentFixture<BookingSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingSectionHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
