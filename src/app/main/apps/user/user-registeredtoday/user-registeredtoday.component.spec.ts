import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisteredtodayComponent } from './user-registeredtoday.component';

describe('UserRegisteredtodayComponent', () => {
  let component: UserRegisteredtodayComponent;
  let fixture: ComponentFixture<UserRegisteredtodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisteredtodayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisteredtodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
