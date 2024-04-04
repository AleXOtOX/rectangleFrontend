import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexrectComponent } from './flexrect.component';

describe('FlexrectComponent', () => {
  let component: FlexrectComponent;
  let fixture: ComponentFixture<FlexrectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexrectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlexrectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
