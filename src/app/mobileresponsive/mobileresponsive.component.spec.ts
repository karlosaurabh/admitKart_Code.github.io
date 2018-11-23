import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileresponsiveComponent } from './mobileresponsive.component';

describe('MobileresponsiveComponent', () => {
  let component: MobileresponsiveComponent;
  let fixture: ComponentFixture<MobileresponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileresponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileresponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
