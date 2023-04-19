import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true
    }
  ]
})
export class TextboxComponent implements ControlValueAccessor {

  @Input() labelText: string;
  @Input() formControlName: string;
  @Input() placeholder: string;
  @Input() type: 'text' | 'password' | 'email';
  @Input() labelClass: string = 'custom-label';
  @Input() inputClass: string = 'form-control';
  @Input() holderClass: string = '';
  @Input() formGroup : FormGroup


  value: any = '';

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.formGroup.get(this.formControlName)!.disable();
    } else {
      this.formGroup.get(this.formControlName)!.enable();
    }
  }

  updateValue(event: any) {
    this.onChange(event.target.value);
    this.onTouched();
  }

}
