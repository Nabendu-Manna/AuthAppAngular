import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginService } from '../service/login.service';
//username, email, first_name, last_name, password1, password2

import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  value = 'Clear me';
  hide = true;

  loginForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
		protected localStorage: LocalStorage,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.localStorage.getItem('authJson').subscribe((authJson) => {
      console.log(authJson);

    });
  }

  login() {
    console.log(this.loginForm.value);
    let authJson = this.loginService.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      this.localStorage.setItem('authJson', response).subscribe(() => {
      });
    });
    this.router.navigate(['/student']);
  }
}
