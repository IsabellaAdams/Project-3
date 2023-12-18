import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathbombsDetailsComponent } from './bathbombs-details.component';

describe('BathbombsDetailsComponent', () => {
  let component: BathbombsDetailsComponent;
  let fixture: ComponentFixture<BathbombsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathbombsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BathbombsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
