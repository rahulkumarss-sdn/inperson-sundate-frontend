import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmoderatorComponent } from './adminmoderator.component';

describe('AdminmoderatorComponent', () => {
  let component: AdminmoderatorComponent;
  let fixture: ComponentFixture<AdminmoderatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminmoderatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmoderatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
