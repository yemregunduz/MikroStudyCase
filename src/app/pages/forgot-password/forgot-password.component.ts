import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  passwordResetForm : FormGroup

  constructor(private formBuilder:FormBuilder){}
  ngOnInit(){
    this.createPasswordResetForm()
  }

  createPasswordResetForm(){
    this.passwordResetForm = this.formBuilder.group({
      email: ['', Validators.required],
    });
  }
}
