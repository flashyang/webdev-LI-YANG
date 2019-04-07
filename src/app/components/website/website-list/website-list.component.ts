import { Component, OnInit } from '@angular/core';
import {WebsiteService} from '../../../services/website.service.client';
import {ActivatedRoute} from '@angular/router';
import {Website} from '../../../model/website.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {

  userId: String;
  user: any;
  websites: Website[] = [];

  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit() {
    this.user = this.sharedService.user;
    this.activatedRoute.params.subscribe( params => {
      return this.websiteService.findWebsitesByUser(this.user._id).subscribe((websites: Website[]) => {
        this.websites = websites;
      });
    });
  }
}
