import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupCodeComponent } from './mockup-code.component';

describe('MockupCodeComponent', () => {
  let component: MockupCodeComponent;
  let fixture: ComponentFixture<MockupCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockupCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockupCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
