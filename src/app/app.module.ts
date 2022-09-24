import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RestapiService } from "./restapi.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SignupComponent } from "./signup/signup.component";
import { UserComponent } from "./user/user.component";
import { AdminComponent } from "./admin/admin.component";
import { EnggComponent } from "./engg/engg.component";
import { ManagerComponent } from "./manager/manager.component";
import { HeaderComponent } from "./header/header.component";
import { UserdetailsService } from "./userdetails.service";
import { BasicauthInterceptor } from "./basicauth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    AdminComponent,
    EnggComponent,
    ManagerComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [RestapiService,
    {provide: HTTP_INTERCEPTORS,useClass:BasicauthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
