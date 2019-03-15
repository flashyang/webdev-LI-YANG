import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-website-edit',
  templateUrl: './website-edit.component.html',
  styleUrls: ['./website-edit.component.css']
})
export class WebsiteEditComponent implements OnInit {

  @ViewChild('inputForm') createForm: NgForm;

  userId: String;
  website_id;
  website;
  websites = [];


  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        this.website_id = params['wid'];
        return this.websiteService.findWebsitesById(this.userId, this.website_id).subscribe(website => {
          this.website = website;
          return this.websiteService.findWebsitesByUser(this.userId).subscribe(websites => {
            let x;
            for (x in websites) {
              this.websites.push(websites[x]);
            }
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
      _id: this.website_id,
      name: this.createForm.value.name,
      developerId: this.userId,
      description: this.createForm.value.description
    };
    return this.websiteService.updateWebsite(newWebsite).subscribe(website => {
      this.website = website;
    });
  }

}
