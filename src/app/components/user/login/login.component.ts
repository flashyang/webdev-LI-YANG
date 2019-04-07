import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('inputForm') loginForm: NgForm;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    return this.userService.login(username, password)
      .subscribe(
        (data: any) => {
          this.sharedService.user = data;
          this.errorFlag = false;
          this.router.navigate(['/profile']);
        },
        (error: any) => {
          this.errorFlag = true;
        }
      );
  }

}
