import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonracesComponent } from './buttonraces.component';

describe('ButtonracesComponent', () => {
  let component: ButtonracesComponent;
  let fixture: ComponentFixture<ButtonracesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonracesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonracesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
