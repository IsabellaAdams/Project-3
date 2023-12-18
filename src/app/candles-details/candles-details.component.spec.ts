import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlesDetailsComponent } from './candles-details.component';

describe('CandlesDetailsComponent', () => {
  let component: CandlesDetailsComponent;
  let fixture: ComponentFixture<CandlesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandlesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandlesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
