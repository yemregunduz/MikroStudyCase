import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password.component';
import { RouterModule } from '@angular/router';
import { TextboxComponent } from 'src/app/components/standalone/textbox/textbox.component';
import { LogoComponent } from 'src/app/components/standalone/logo/logo.component';



@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    TextboxComponent,
    LogoComponent,
    RouterModule.forChild([{ path: '', component: ForgotPasswordComponent }]),
  ]
})
export class ForgotPasswordModule { }
