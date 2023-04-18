import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  standalone : true,
  imports: [
    CommonModule
  ],
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() imageUrl : string
  @Input() width : number = 50
}
