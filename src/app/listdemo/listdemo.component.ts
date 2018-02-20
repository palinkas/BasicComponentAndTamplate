import { Component, OnInit } from '@angular/core';
import {EventModel} from './event-model';

@Component({
  selector: 'app-listdemo',
  templateUrl: './listdemo.component.html',
  styleUrls: ['./listdemo.component.css']
})
export class ListdemoComponent {
  events: EventModel[];

  constructor() {
    this.events = [
      {
        id: 1,
        name: 'sziget',
        pic: 'https://bkk.hu/wp-content/uploads/2017/08/sziget-2017-logo.png'
      },
    {
      id: 2,
      name: 'fezen',
      pic: 'http://www.e-jegyiroda.hu/img/fezen-2017-jegyek-berletek.jpg'
    },
    {
      id: 3,
      name: 'rockmaraton',
      pic: 'http://www.rockmaraton.hu/media/images/rockmaraton-2018-jegyvasarlas.jpg'
    }
    ];
    console.log('megjott a listdemo cmp');
    this.events.reduce(( x , y ) => {
      if (x > y) {
        return x;
      } else {

      }
    });
  }


  add(newEventNameInput: HTMLInputElement) {
    this.events = [...this.events, new EventModel(5, newEventNameInput.value)];
    newEventNameInput.value = '';
  }

  delete(id: number) {
    /*filter: fog egy tömböt, annak az adott elemeihez kér egy paramétert, és olyan tömböt ad vissza,
     amelynek az elemei átmentek a vizsgálaton
     filter [o,x,o,x] (?o?) --> [o,o]*/
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

}
