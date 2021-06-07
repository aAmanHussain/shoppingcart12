import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapadComponent } from './papad.component';

describe('PapadComponent', () => {
  let component: PapadComponent;
  let fixture: ComponentFixture<PapadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
