import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUserService } from '../service/register-user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public wip: boolean;
  public emailSent: boolean;
  public formGroup: FormGroup;

  constructor(private registerUserService: RegisterUserService,
    private formBuilder: FormBuilder) {
    this.wip = false;
    this.emailSent = false;
    this.formGroup = undefined;
   }

  ngOnInit(): void {
    this.initializeFormBuilder();
  }

  /**
   * @description This method initilizes the form with its properties
   * @return {void}
   */
   public initializeFormBuilder(): void {
    this.formGroup = this.formBuilder.group({
      email: new FormControl('', [Validators.required])
    });
  }

  public sendEmailForgotPassword(user: User): void {
    this.emailSent = true;
    this.wip = true;
    setTimeout(()=>{
      this.wip = false;
    }, 2000)
    this.registerUserService.forgotPassword(user).subscribe(() => {});
  }

}
