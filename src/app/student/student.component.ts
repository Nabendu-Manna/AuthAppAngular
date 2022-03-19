import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { LoginService } from '../service/login.service';
//username, email, first_name, last_name, password1, password2

import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  userData: any;
  loaded: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
		protected localStorage: LocalStorage,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.localStorage.getItem('authJson').subscribe((authJson) => {
      console.log(authJson);
      this.loginService.getUserData(authJson).subscribe((userData: any) => {
        this.localStorage.setItem('userJson', userData).subscribe();
        this.userData = userData;
        this.loaded = true;
      });
    });
  }

}
