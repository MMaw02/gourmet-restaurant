import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  form?: FormGroup;
  idUser?: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.idUser = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);

    this.userService.getById(this.idUser).subscribe(
      user => {
        this.form = this.fb.group({
          username: [user.username, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
          firstname: [user.firstname, [Validators.required]],
          lastname: [user.lastname, [Validators.required]],
          dni: [user.dni, [Validators.required]],
          email: [user.email, [Validators.required, Validators.email]],
          address: [user.address, []],
          cellphone: [user.cellphone, []],
          password: [, [Validators.required]],
          userType: [user.userType, [Validators.required]]
        })
      }
    )
  }

  update() {
    this.userService.update(this.idUser!, this.form!.value).subscribe({
      next: () => {
        this.router.navigate(['/admin/user']);
      }
    });
  }
}
