import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [CommonModule],
  template: `<div class="holder">
    <img
      src="../../../assets/images/logo.svg"
      alt="logo"
      width="36"
      height="51"
    />
    <p class="logo-text">Google Maps</p>
  </div> `,
  styles: [`
    .holder {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .logo-text {
      margin-bottom: 0;
      margin-left: 10px;
      font-size: 24px;
      font-weight: bold;
      color: #5F6368;
    }
  `],
})
export class LogoComponent {}
