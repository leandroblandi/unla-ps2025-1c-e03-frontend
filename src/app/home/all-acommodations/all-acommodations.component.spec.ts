import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAcommodationsComponent } from './all-acommodations.component';

describe('AllAcommodationsComponent', () => {
  let component: AllAcommodationsComponent;
  let fixture: ComponentFixture<AllAcommodationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAcommodationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllAcommodationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
