import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloterComponent } from './floter.component';

describe('FloterComponent', () => {
  let component: FloterComponent;
  let fixture: ComponentFixture<FloterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
