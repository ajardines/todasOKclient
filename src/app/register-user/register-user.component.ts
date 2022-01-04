import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user/user';
import { RegisterUserService } from '../service/register-user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public formGroup: FormGroup;
  public wip: boolean;
  public showAlert: boolean;
  public messageAlert: string;

  constructor(private formBuilder: FormBuilder,
    private registerUserService: RegisterUserService,
    private router: Router) {
    this.formGroup = undefined;
    this.wip = false;
    this.showAlert = false;
   }

  public ngOnInit(): void {
    this.initializeFormBuilder();
  }

  /**
   * @description This method initilizes the form with its properties
   * @return {void}
   */
   public initializeFormBuilder(): void {
    this.formGroup = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      // phone: new FormControl('', [Validators.required])
    });
  }

  /**
   * registe
   */
  public registerUser(user: User) {
    this.wip = true;
    this.showAlert = false;
    this.registerUserService.createUser(user).subscribe((userCreated: User) => {
      this.router.navigateByUrl("/sending-email");
      this.wip = false;
    }, (error) => {
      this.messageAlert = error.error.error || undefined;
      this.showAlert = true;
      this.wip = false;
    });
  }
}
