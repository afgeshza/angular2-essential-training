import { Component, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from './app.service';
import { lookupListToken } from './providers';

@Component({
  selector: 'spending-form',
  templateUrl: 'app/spending-form.component.html'
})
export class SpendingFormComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService,
    @Inject(lookupListToken) public lookupLists,
    private router: Router) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      category: this.formBuilder.control('Other'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      price: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ])),
      date: this.formBuilder.control('', Validators.compose([
        Validators.required
      ]))
    });
  }

  onSubmit(spending) {
    this.appService.add(spending);
    this.router.navigate(['/']);
  }

  dateValidator(control) {

    if (control.value.trim().length === 0) {
      return null;
    }
    let selected = control.value;
    let today = new Date();
    if (selected > today) {
      return null;
    } else {
      return {
        'date': {}
      };
    }
  }
}

