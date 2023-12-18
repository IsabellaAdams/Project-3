import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathbombsListComponent } from './bathbombs-list.component';

describe('BathbombsListComponent', () => {
  let component: BathbombsListComponent;
  let fixture: ComponentFixture<BathbombsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathbombsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BathbombsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
