import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertifyService } from './../services/alertify.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  loggedInUser: string;

  constructor(
    private alertifyService: AlertifyService,
    private router: Router,
    private dropDown: BsDropdownModule,
  ) {}

  ngOnInit(): void {}

  loggedIn(): any {
    this.loggedInUser = localStorage.getItem('token');
    return this.loggedInUser;
  }

  onLogout(): any {
    this.alertifyService.warning('Successfully Logout');
    this.router.navigate(['user-login']);
    return localStorage.removeItem('token');
  }
}
