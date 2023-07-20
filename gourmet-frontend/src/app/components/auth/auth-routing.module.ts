import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientLayoutComponent } from "../client/client-layout/client-layout.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    component: ClientLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
