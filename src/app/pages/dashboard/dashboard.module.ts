import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { UserListModule } from 'src/app/components/user-list/user-list.module';
import { SpinnerButtonComponent } from 'src/app/components/standalone/spinner-button/spinner-button.component';
import { UserService } from 'src/app/services';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    UserListModule,
    SpinnerButtonComponent,
    RouterModule.forRoot([{
      path: '', component : DashboardComponent
    }])
  ],
  exports:[],
  providers:[UserService]
})
export class DashboardModule { }
