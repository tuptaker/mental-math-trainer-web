import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCreatedViewComponent } from './account-created-view.component';

describe('AccountCreatedViewComponent', () => {
  let component: AccountCreatedViewComponent;
  let fixture: ComponentFixture<AccountCreatedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountCreatedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCreatedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
