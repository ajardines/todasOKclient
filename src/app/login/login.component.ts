import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterUserService } from '../service/register-user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup;
  public wip: boolean;
  public showAlert: boolean;
  public messageAlert: string;


  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private registerUserService: RegisterUserService) {
    this.formGroup = undefined;
    this.wip = false;
    this.showAlert = false;
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
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  public login(user: User) {
    this.wip = true;
    this.showAlert = false;
    this.registerUserService.login(user).subscribe((token: string) => {
      localStorage.setItem('token', `Bearer ${token}`);
      this.registerUserService.loginEvent.emit(true);
      this.router.navigateByUrl("/");
      this.wip = false;
    }, (error) => {
      this.messageAlert = error.error.error || undefined;
      this.showAlert = true;
      this.wip = false;
    });
  }
}
