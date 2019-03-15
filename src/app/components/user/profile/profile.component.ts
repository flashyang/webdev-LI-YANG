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
  user;

  @ViewChild('inputForm') createForm: NgForm;
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  updateUser() {
    return this.userService.updateUser(this.user, this.user._id).subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      return this.userService.findUserById(params['uid']).subscribe(user => {
        this.user = user;
      });
    });
  }

}
