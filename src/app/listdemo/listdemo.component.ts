import { Component, OnInit } from '@angular/core';

export class EventModel {
  id: number;
  name: string;
}

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
        name: 'sziget'
      },
    {
      id: 2,
      name: 'fezen'
    },
    {
      id: 3,
      name: 'rockmaraton'
    }
    ];
    console.log('megjott a listdemo cmp');
  }


  delete(id: number) {
    /*filter: fog egy tömböt, annak az adott elemeihez kér egy paramétert, és olyan tömböt ad vissza,
     amelynek az elemei átmentek a vizsgálaton
     filter [o,x,o,x] (?o?) --> [o,o]*/
    this.events = this.events.filter((ev: EventModel) => ev.id !== id);
  }

}
