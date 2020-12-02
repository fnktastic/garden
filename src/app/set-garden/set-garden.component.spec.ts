import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetGardenComponent } from './set-garden.component';

describe('SetGardenComponent', () => {
  let component: SetGardenComponent;
  let fixture: ComponentFixture<SetGardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetGardenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetGardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
