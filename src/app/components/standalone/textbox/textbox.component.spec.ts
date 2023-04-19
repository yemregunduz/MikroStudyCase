import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxComponent } from './textbox.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

describe('TextboxComponent', () => {
  let component: TextboxComponent;
  let fixture: ComponentFixture<TextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [ReactiveFormsModule,TextboxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextboxComponent);
    component = fixture.componentInstance;
    component.formGroup = new FormGroup({
      test: new FormControl(''),
    });
    component.formControlName = 'test';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update form control value on input change', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    inputElement.value = 'Test value';
    inputElement.dispatchEvent(new Event('input'));
    expect(component.formGroup.get('test')!.value).toEqual('Test value');
  });

  it('should update input value on form control value change', () => {
    component.formGroup.get('test')!.setValue('Test value');
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.value).toEqual('Test value');
  });

  it('should disable input element', () => {
    component.setDisabledState(true);
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.disabled).toBe(true);
  });

  it('should enable input element', () => {
    component.setDisabledState(false);
    fixture.detectChanges();
    const inputElement = fixture.nativeElement.querySelector('input');
    expect(inputElement.disabled).toBe(false);
  });
});
