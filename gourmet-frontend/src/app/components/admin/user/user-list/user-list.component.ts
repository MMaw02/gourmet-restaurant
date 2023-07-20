import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService
    ) {}

    ngOnInit(): void {
      this.getUsers();
    }

    getUsers() {
      this.userService.getUsers().subscribe(u => {
        this.users = u;
      })
    }

    delete(user: User) {
      if (confirm('¿Estás seguro de eliminar este producto?')) {
        this.userService.delete(user.id).subscribe(
          () => {
            this.getUsers()
          }
        );
      }
    }
  }
