import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsingConditionsComponent } from './using-conditions/using-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RegisterUserService } from './service/register-user.service';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './shell/shell.component';
import { SendingEmailComponent } from './sending-email/sending-email.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AvatarModule } from 'ngx-avatar';
import { AlertComponent } from './alert/alert.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterUserComponent,
    UsingConditionsComponent,
    PrivacyPolicyComponent,
    ShellComponent,
    SendingEmailComponent,
    SpinnerComponent,
    ValidateEmailComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AvatarModule,
  ],
  providers: [RegisterUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
