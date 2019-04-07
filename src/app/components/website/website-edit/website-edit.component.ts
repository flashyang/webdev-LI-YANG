import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('inputForm') createForm: NgForm;

  userId: String;
  website_id;
  website: Website;
  websites: Website[] = [];


  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    const user = this.sharedService.user;
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = user._id;
        this.website_id = params['wid'];
        return this.websiteService.findWebsitesById(this.userId, this.website_id).subscribe((website: Website) => {
          this.website = website;
          return this.websiteService.findWebsitesByUser(this.userId).subscribe((websites: Website[]) => {
            this.websites = websites;
          });
        });
      }
    );
  }

  delete() {
    return this.websiteService.deleteWebsite(this.userId, this.website_id).subscribe(data => {
      console.log('delete website');
    });
  }

  update() {
    const newWebsite = {
      name: this.createForm.value.name,
      developerId: this.userId,
      description: this.createForm.value.description
    };
    return this.websiteService.updateWebsite(newWebsite, this.website._id).subscribe((website: Website) => {
      this.website.name = website.name;
      this.website.developerId = website.developerId;
      this.website.description = website.description;
    });
  }

}
