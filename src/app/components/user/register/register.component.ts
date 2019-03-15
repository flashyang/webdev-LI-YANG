import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/user.model.client';

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

  constructor(private userService: UserService) { }

  register() {
    const password = this.registerForm.value.password;
    const v_password = this.registerForm.value.v_password;
    if ( v_password === password) {
      this.errorFlag = false;
      const newUser = {
        username: this.registerForm.value.username,
        password: this.registerForm.value.password,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName
      };
      this.userService.createUser(newUser).subscribe((user: User) => console.log('register!'));
    } else {
      this.errorFlag = true;
    }
  }

  ngOnInit() {
  }

}
