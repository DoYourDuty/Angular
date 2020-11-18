import { error } from '@angular/compiler/src/util';
import { AlertifyService } from './../../services/alertify.service';
import { AuthService } from './../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router) {}

  ngOnInit(): void {}

  onLogin(loginFrom: NgForm): void {
    const token = this.authService.authUser(loginFrom.value);
    if (token) {
      localStorage.setItem('token', token.userName);
      this.alertifyService.success('Logged-in  Successfully');
      this.router.navigate(['/']);
    } else {
      this.alertifyService.error('Please provide Valid User Name and Password');
    }
  }
}
