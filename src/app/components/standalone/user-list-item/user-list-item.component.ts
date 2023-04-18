import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from '../avatar/avatar.component';
import { Helpers } from 'src/app/helpers/functions';

@Component({
  selector: 'app-user-list-item',
  standalone : true,
  imports:[
    CommonModule,
    AvatarComponent
  ],
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {
  @Input() imageUrl : string
  @Input() firstName? : string
  @Input() lastName? : string
  @Input() title? :string
  @Input() email? : string
  @Input() phone : string
}
