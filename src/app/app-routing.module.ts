import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { EnggComponent } from "./engg/engg.component";
import { LoginComponent } from "./login/login.component";
import { ManagerComponent } from "./manager/manager.component";
import { SignupComponent } from "./signup/signup.component";
import { UserComponent } from "./user/user.component";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "user", component: UserComponent },
  { path: "admin", component: AdminComponent },
  {
    path: "engg",
    component: EnggComponent,
  },
  { path: "manager", component: ManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
