import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {User} from '../../../model/user.model.client';
import {Router} from '@angular/router';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  @ViewChild('inputForm') createForm: NgForm;
  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

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
    this.user = this.sharedService.user;
  }

  deleteUser() {
    this.userService.deleteUser(this.user._id).subscribe(() => {
      this.logout();
    });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => {
          this.sharedService.user = '';
          this.router.navigate(['/login']);
        }
      );
  }

}
