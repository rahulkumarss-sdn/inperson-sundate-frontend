import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserImgsComponent } from './user-imgs.component';

describe('UserImgsComponent', () => {
  let component: UserImgsComponent;
  let fixture: ComponentFixture<UserImgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserImgsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserImgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
