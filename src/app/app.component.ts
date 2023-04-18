import { Component } from '@angular/core';
import { MikroHttpClientService } from './services/mikro-http-client.service';
import { UserService } from './services';
import { User } from './contracts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MikroStudyCase';
}
