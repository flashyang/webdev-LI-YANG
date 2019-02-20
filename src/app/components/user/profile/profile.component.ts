import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user;
  userId: String;

  @ViewChild('inputForm') createForm: NgForm;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  updateUser() {
    const  newUser = {
      _id: this.userId,
      firstName: this.createForm.value.firstName,
      lastName: this.createForm.value.lastName
    };
    this.user = this.userService.updateUser(newUser);
    console.log('update');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['uid'];
      this.user = this.userService.findUserById(this.userId);
    });
  }

}
