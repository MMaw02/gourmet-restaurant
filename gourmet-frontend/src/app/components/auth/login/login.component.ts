import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserCredentials } from 'src/app/interfaces/userCredentials.interface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('400ms ease', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('400ms ease', style({ opacity: 0 }))]),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  switch: boolean = true;
  loginForm!: FormGroup;
  registerForm!: FormGroup;
  credentials: UserCredentials = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private route: Router
  ) {}


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

    this.registerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      userype: new FormControl('USER'),
      dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    })
  }

  login() {
    this.credentials.username = this.loginForm.get('username')?.value,
    this.credentials.password = this.loginForm.get('password')?.value,

    this.authService.login(this.credentials).subscribe(user => {
      this.route.navigate(['/'])
    })
  }

  toggle() {
    this.switch = !this.switch;
  }

  registerUser() {
    this.authService.signup(this.registerForm.value).subscribe(user => {
      this.toggle();
      this.ngOnInit();
    });
  }

}
