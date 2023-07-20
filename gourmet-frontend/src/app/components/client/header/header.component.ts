import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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

  isAdmin() {
    return this.authService.isAdmin();
  }

}
