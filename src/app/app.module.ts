import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UsingConditionsComponent } from './using-conditions/using-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterUserComponent,
    UsingConditionsComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
