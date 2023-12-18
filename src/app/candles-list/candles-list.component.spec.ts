import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandlesListComponent } from './candles-list.component';

describe('CandlesListComponent', () => {
  let component: CandlesListComponent;
  let fixture: ComponentFixture<CandlesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandlesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CandlesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
