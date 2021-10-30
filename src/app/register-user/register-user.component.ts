import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = undefined;
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
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required])
    });
  }

  /**
   * registe
   */
  public registerUser(user: User) {
    console.log("%%%%%%%%", this.formGroup.errors);
    
    console.log("%%%$$$$", this.formGroup.get('email').errors);
    console.log("####", user);
  }


}
