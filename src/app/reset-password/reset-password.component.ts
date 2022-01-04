import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegisterUserService } from '../service/register-user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public wip: boolean;
  public passwordReset: boolean;
  
  public showAlert: boolean;
  public messageAlert: string;

  public formGroup: FormGroup;
  public user: User;
  public token: string;

  constructor(private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private registerUserService: RegisterUserService) {
    this.wip = false;
    this.showAlert = false;
    this.passwordReset = false;
    this.formGroup = undefined;
    this.user = new User();
   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.token = routeParams.get('token');

    this.getUser(this.token);
  }

  public initializeFormBuilder(): void {
    this.formGroup = this.formBuilder.group({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  public getUser(token: string) {
    this.wip = true;
    this.registerUserService.getUserWithTempToken(token).subscribe((user: User) => {
      this.user = user;
      this.initializeFormBuilder();
      this.wip = false;
    }, (error) => {
      this.wip = false;
    });
  }

  public resetPassword( {password, confirmPassword} ) {
    this.showAlert = false;
    if (password != confirmPassword) {
      this.messageAlert = 'Las contraseñas no son iguales';
      this.showAlert = true;
      return;
    }
    this.wip = true;
    this.registerUserService.updatePassword(password, this.token).subscribe(() => {
      this.wip = false;
      this.passwordReset = true;
    }, (error) => {
      this.messageAlert = error.error.error || undefined;
      this.showAlert = true;
      this.wip = false;
    });
  }
}
