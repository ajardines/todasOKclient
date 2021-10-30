import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsingConditionsComponent } from './using-conditions/using-conditions.component';


const routes: Routes = [
  {path: 'register', component: RegisterUserComponent},
  {path: 'using-conditions', component: UsingConditionsComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
