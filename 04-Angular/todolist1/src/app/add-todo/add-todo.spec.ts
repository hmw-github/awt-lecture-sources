import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTodo } from './add-todo';

describe('AddTodo', () => {
  let component: AddTodo;
  let fixture: ComponentFixture<AddTodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTodo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTodo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
