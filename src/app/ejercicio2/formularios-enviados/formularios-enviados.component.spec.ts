import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariosEnviadosComponent } from './formularios-enviados.component';

describe('FormulariosEnviadosComponent', () => {
  let component: FormulariosEnviadosComponent;
  let fixture: ComponentFixture<FormulariosEnviadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariosEnviadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariosEnviadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
