import { Component, OnInit } from '@angular/core';

import { LocalStorage } from '@ngx-pwa/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isLogin: boolean = false;
  userName: string | null = null;

  constructor(
    private localStorage: LocalStorage,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginCheck();
  }

  loginCheck(){
    this.localStorage.getItem('authJson').subscribe((authJson) => {
      if(authJson){
        this.isLogin=true
      }
    });
    this.localStorage.getItem('userJson').subscribe((userJson: any) => {
      if(userJson){
        this.userName = userJson.user.username;
      }
    });
  }

  logout(){
    this.localStorage.removeItem('authJson').subscribe();
    this.loginCheck();
    this.router.navigate(['/login']);
  }
}
