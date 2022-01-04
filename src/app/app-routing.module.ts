import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SendingEmailComponent } from './sending-email/sending-email.component';
import { ShellComponent } from './shell/shell.component';
import { UsingConditionsComponent } from './using-conditions/using-conditions.component';
import { ValidateEmailComponent } from './validate-email/validate-email.component';


const routes: Routes = [
  {path: '',
    component: ShellComponent,
    children: [
      {path: 'register', component: RegisterUserComponent},
      {path: 'login', component: LoginComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'reset-password/:token', component: ResetPasswordComponent}
    ]
  },
  {path: 'using-conditions', component: UsingConditionsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'validate-email/:token', component: ValidateEmailComponent},
  {path: 'sending-email', component: SendingEmailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
