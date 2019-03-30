import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  @ViewChild('inputForm') createForm: NgForm;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  updateUser() {
    const newUser = {
      username: this.user.username,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
    };
    return this.userService.updateUser(newUser, this.user._id).subscribe((user: User) => {
      this.user.username = user.username;
      this.user.firstName = user.firstName;
      this.user.lastName = user.lastName;
      this.user.email = user.email;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      return this.userService.findUserById(params['uid']).subscribe((user: User) => {
        this.user = user;
      });
    });
  }

}
