import {Component, OnInit, ViewChild} from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';
import {Website} from '../../../model/website.model.client';

@Component({
  selector: 'app-website-new',
  templateUrl: './website-new.component.html',
  styleUrls: ['./website-new.component.css']
})
export class WebsiteNewComponent implements OnInit {

  @ViewChild('inputForm') createForm: NgForm;

  userId: String;
  websites: Website[] = [];
  website: Website;

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: any) => {
        this.userId = params['uid'];
        return this.websiteService.findWebsitesByUser(this.userId).subscribe((websites: Website[]) => {
          this.websites = websites;
        });

      }
    );
  }

  create() {
    const newWebsite = {
      name: this.createForm.value.name,
      developerId: this.userId,
      description: this.createForm.value.description
    };
    return this.websiteService.createWebsite(newWebsite).subscribe((website: Website) => {
      this.website = website;
      console.log(newWebsite);
    });
  }


}
