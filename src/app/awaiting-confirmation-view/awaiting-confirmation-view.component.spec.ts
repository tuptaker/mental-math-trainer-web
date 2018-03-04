import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitingConfirmationViewComponent } from './awaiting-confirmation-view.component';

describe('AwaitingConfirmationViewComponent', () => {
  let component: AwaitingConfirmationViewComponent;
  let fixture: ComponentFixture<AwaitingConfirmationViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwaitingConfirmationViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitingConfirmationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
