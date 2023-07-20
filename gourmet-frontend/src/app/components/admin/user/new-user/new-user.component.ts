import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  form: FormGroup = this.fb.group({
    username: [, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
    firstname: [, [Validators.required]],
    lastname: [, [Validators.required]],
    dni: [, [Validators.required]],
    email: [, [Validators.required, Validators.email]],
    address: [, []],
    cellphone: [, []],
    password: [, [Validators.required]],
    userType: [, [Validators.required]]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {

  }

  create(): void {
    this.userService.create(this.form.value).subscribe(products => {
      this.router.navigate(['/admin/user']);
    });
  }

}
