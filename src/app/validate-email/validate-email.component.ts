import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterUserService } from '../service/register-user.service';

@Component({
  selector: 'app-validate-email',
  templateUrl: './validate-email.component.html',
  styleUrls: ['./validate-email.component.css']
})
export class ValidateEmailComponent implements OnInit {

  public wip: boolean;

  constructor(private route: ActivatedRoute,
    private registerUserService: RegisterUserService,
    private router: Router) { }

  ngOnInit(): void {
    this.wip = true;
    const routeParams = this.route.snapshot.paramMap;
    const token = routeParams.get('token');

    this.registerUserService.validateEmail(token).subscribe(() => {
      this.router.navigateByUrl("/");
      this.wip = false;
    },
    (error) => {
      this.wip = false;
    });
  }

}
