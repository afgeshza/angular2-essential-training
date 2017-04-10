import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  constructor(private http: Http,
  private router: Router) {}
  spendings;
  get(category) {
    let searchParams = new URLSearchParams();
    

    searchParams.append('category', category);

    if (category) {
        this.spendings = this._spendings.filter(spending => spending.category.toLowerCase() === category);
    } else {
        this.spendings = this._spendings;
    }
    return this.spendings;

  }
  
  add(spending) {
    this._spendings.push(spending);
    return this._spendings;
  }
  
  delete(spending) {
    let index = this._spendings.indexOf(spending);
    if(index >= 0) {
      this._spendings.splice(index, 1);
    }
  }

  _spendings = [
    {
      id: 1,
      name: "Ketoprak",
      price: 15000,
      category: "Food",
      date: 1294166565384
    },
    {
      id: 2,
      name: "Rokok",
      price: 20000,
      category: "Other",
      date: 1294166565384
    }, 
    {
      id: 3,
      name: "Pertamax",
      price: 50000,
      category: "Vehicle",
      date: 1294166565384
    }, {
      id: 4,
      name: "Jus Pisang",
      price: 8000,
      category: "Food",
      date: 1294166565384
    }, 
    {
      id: 5,
      name: "Ganti Oli",
      price: 300000,
      category: "Vehicle",
      date: 1294166565384
    }, 
    {
      id: 6,
      name: "Kemeja Putih",
      price: 120000,
      category: "Clothing",
      date: 1294166565384
    }
  ];
  
}

