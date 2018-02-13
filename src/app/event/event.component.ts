import {Component} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  title = 'sziasztok, basszatok sokat';

    constructor() {
      console.log(`${this.title} itt lehet folytatni, azt amit le akarunk irni`);
      this.greetings();
    }

    greetings() {
      console.log('not implemented yet!');
    }
}



