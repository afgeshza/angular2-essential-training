import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AppService } from './app.service';

@Component({
  templateUrl: 'app/spending-list.component.html',
  styleUrls: ['app/spending-list.component.css']
})
export class SpendingListComponent {
  spendings;
  params;

  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    this.params = this.activatedRoute.params;
    console.log(this.params);
    let category = this.params.value.category;
    if (category.toLowerCase() === 'home') {
      category = '';
    }
    this.spendings = this.appService.get(category);
    this.router.navigate(['/', category]);
  }

  onDelete(spending) {
    this.appService.delete(spending);
  }

 }
