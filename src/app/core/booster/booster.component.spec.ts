import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterComponent } from './booster.component';

describe('BoosterComponent', () => {
  let component: BoosterComponent;
  let fixture: ComponentFixture<BoosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoosterComponent]
    });
    fixture = TestBed.createComponent(BoosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});