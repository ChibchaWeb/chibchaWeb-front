import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagmentUsersComponent } from './managment-users.component';

describe('ManagmentUsersComponent', () => {
  let component: ManagmentUsersComponent;
  let fixture: ComponentFixture<ManagmentUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagmentUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagmentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
