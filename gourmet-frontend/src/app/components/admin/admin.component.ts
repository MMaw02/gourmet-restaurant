import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit  {
  firstName: string = '';
  currentUser!: User;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.getAuthenticationState()
    .subscribe(user => {
      this.currentUser = user;
      this.firstName = user.username;
    })
  }

  async logout(): Promise<void> {
    this.authService.logout();
    this.router.navigateByUrl('/auth/login', { skipLocationChange: true });
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

}
