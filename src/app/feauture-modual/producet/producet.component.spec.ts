import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducetComponent } from './producet.component';

describe('ProducetComponent', () => {
  let component: ProducetComponent;
  let fixture: ComponentFixture<ProducetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducetComponent]
    });
    fixture = TestBed.createComponent(ProducetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
