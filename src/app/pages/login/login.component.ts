// * Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCredentials } from 'src/app/contracts';

// * Service Imports
import { LoginService } from 'src/app/services';

//* Third Party Imports
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService
  ) {}
  loginForm: FormGroup;
  loading: boolean = false;
  ngOnInit() {
    this.createLoginForm();
  }
  async login() {
    this.loading = true;
    const loginCredentials: LoginCredentials = Object.assign(
      {},
      this.loginForm.value
    );
    await this.loginService.login(
      loginCredentials,
      () => {
        this.toastr.success('Giriş başarılı!');
        this.router.navigate(['']);
      },
      () => {
        this.toastr.error('Giriş bilgileri hatalı!!');
      }
    );

    this.loading = false;
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
