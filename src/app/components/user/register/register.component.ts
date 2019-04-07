import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('inputForm') registerForm: NgForm;
  user: User;
  errorFlag: boolean;
  errorMsg = 'Password mis-matching!';

  constructor(private userService: UserService, private router: Router) { }

  register() {
    const password = this.registerForm.value.password;
    const v_password = this.registerForm.value.v_password;
    const username = this.registerForm.value.username;
    if ( v_password === password) {
      this.errorFlag = false;
      this.userService.register(username, password).subscribe(
        (user: User) => {
          this.user = user;
          this.router.navigate(['/profile']);
        }, (err: any) => {
          this.errorFlag = true;
          this.errorMsg = 'Username unavailable!';
        }
      );
    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
  }

}
