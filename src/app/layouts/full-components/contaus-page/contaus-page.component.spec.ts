import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContausPageComponent } from './contaus-page.component';

describe('ContausPageComponent', () => {
  let component: ContausPageComponent;
  let fixture: ComponentFixture<ContausPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContausPageComponent]
    });
    fixture = TestBed.createComponent(ContausPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
