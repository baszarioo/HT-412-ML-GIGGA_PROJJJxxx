import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixToTenComponent } from './six-to-ten.component';

describe('SixToTenComponent', () => {
  let component: SixToTenComponent;
  let fixture: ComponentFixture<SixToTenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixToTenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixToTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
