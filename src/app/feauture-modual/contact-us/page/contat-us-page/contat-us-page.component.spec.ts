import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatUsPageComponent } from './contat-us-page.component';

describe('ContatUsPageComponent', () => {
  let component: ContatUsPageComponent;
  let fixture: ComponentFixture<ContatUsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContatUsPageComponent]
    });
    fixture = TestBed.createComponent(ContatUsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
