import { Component, OnInit } from '@angular/core';
import { RegisterUserService } from '../service/register-user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public isLoged: boolean;
  public user: User;

  constructor(private registerUserService: RegisterUserService) {
    this.user = new User();
   }

  ngOnInit(): void {
    this.loginEvent();
    this.getUser();
  }

  public loginEvent() {
    this.registerUserService.loginEvent.subscribe((login: boolean) => {
      this.isLoged = login;
      if (this.isLoged) {
        this.getUser();
      }
    })
  }

  public getUser() {
    this.registerUserService.getUser().subscribe((user: User) => {
      this.user = user;
      this.isLoged = true;
    }, (error) => {
      this.isLoged = false;
    });
  }

  public logout() {
    localStorage.removeItem('token');
    this.isLoged = false;
  }

}
