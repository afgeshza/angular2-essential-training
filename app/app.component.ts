import { Component } from '@angular/core';

@Component({
  selector: 'mw-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  popupItem = null;
  i = 0;

  onMediaItemPreview(popupItem) {
    popupItem.images[this.i].visible = true;
    this.popupItem = popupItem;
  }

  onPopupClose() {
    this.popupItem = null;
    this.popupItem.images[this.i].visible = false;
    this.i = 0;
    this.popupItem.images[this.i].visible = true;
  }

  onPopupPrev() {
    this.popupItem.images[this.i].visible = false;
    if (this.i == 0) {
      this.i = this.popupItem.images.length-1;
    } else {
      this.i--;
    }
    this.popupItem.images[this.i].visible = true;
  }

  onPopupNext() {
    this.popupItem.images[this.i].visible = false;
    if (this.i == this.popupItem.images.length) {
      this.i = this.popupItem.images.length-1;
    } else {
      this.i++;
    }
    this.popupItem.images[this.i].visible = true;
  }

  mediaItems = [
    {
      id: 1,
      name: "Firebug",
      medium: "Series",
      category: "Science Fiction",
      year: 2010,
      watchedOn: 1294166565384,
      isFavorite: false,
      images: [
        {
          URL: "http://lorempixel.com/400/200/sports",
          visible: false
        },{
          URL: "http://lorempixel.com/400/200/city",
          visible: false
        }]
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true,
      images: [
        {
          URL: "http://lorempixel.com/400/200/city",
          visible: false
        },{
          URL: "http://lorempixel.com/400/200/sports",
          visible: false
        }]
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false,
      images: [
        {
          URL: "http://lorempixel.com/400/200/people",
          visible: false
        },{
          URL: "http://lorempixel.com/400/200/food",
          visible: false
        }]
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true,
      images: [
        {
          URL: "http://lorempixel.com/400/200/food",
          visible: false
        },{
          URL: "http://lorempixel.com/400/200/nature",
          visible: false
        }]
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false,
      images: [
        {
          URL: "http://lorempixel.com/400/200/nature",
          visible: false
        },{
          URL: "http://lorempixel.com/400/200/people",
          visible: false
        }]
    }
  ];
}
