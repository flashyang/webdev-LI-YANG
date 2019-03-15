import {Component, OnInit, ViewChild} from '@angular/core';
import { Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../model/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('inputForm') loginForm: NgForm;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    return this.userService.findUserByCredentials(username, password).subscribe((user: User) => {
      if (user)  {
        this.router.navigate(['/user', user._id]);
      } else {
        this.errorFlag = true;
      }
    });
  }

}
