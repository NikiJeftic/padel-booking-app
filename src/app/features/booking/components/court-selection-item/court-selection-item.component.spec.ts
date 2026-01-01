import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtSelectionItemComponent } from './court-selection-item.component';

describe('CourtSelectionItemComponent', () => {
  let component: CourtSelectionItemComponent;
  let fixture: ComponentFixture<CourtSelectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourtSelectionItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourtSelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
