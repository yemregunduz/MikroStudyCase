// * Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

// * Custom Component Imports
import { LoginComponent } from './login.component';
import { SpinnerButtonComponent } from 'src/app/components/standalone/spinner-button/spinner-button.component';
import { LoginService } from 'src/app/services';
import { TextboxComponent } from 'src/app/components/standalone/textbox/textbox.component';
import { LogoComponent } from 'src/app/components/standalone/logo/logo.component';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    SpinnerButtonComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LogoComponent,
    TextboxComponent,
    RouterModule.forChild([{ path: '', component: LoginComponent }]),
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule {}
