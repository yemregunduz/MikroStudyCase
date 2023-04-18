import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../standalone/avatar/avatar.component';
import { UserListItemComponent } from '../standalone/user-list-item/user-list-item.component';
import { UserListComponent } from './user-list.component';



@NgModule({
  declarations: [UserListComponent],
  imports: [
    CommonModule,
    AvatarComponent,
    UserListItemComponent
  ],
  exports :[
    UserListComponent
  ]
})
export class UserListModule { }
