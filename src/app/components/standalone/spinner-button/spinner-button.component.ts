import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner-button.component.html',
  styleUrls: ['./spinner-button.component.scss']
})
export class SpinnerButtonComponent {
  @Input() classes : string
  @Input() loading : boolean = false
  @Input() text:string
  @Input() disabled : boolean = false
  @Input() type : 'button' | 'menu' | 'reset' | 'submit'
  @Input() spinnerClass : string = "text-primary"
  @Output() onClick : EventEmitter<any> = new EventEmitter<any>()
}
