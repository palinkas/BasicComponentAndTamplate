import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular kiraaaaly és nagyon nagy mester leszek belőle';
  events = ['sziget', 'efott', 'fezen', 'balatonsound'];
  show = true;
  klikkeljunke = false;
  inputContent: string;

  pipeDemo = [
      {
      'id': 1,
      'name': 'palinka'
      },
      {
      'id': 2,
      'name': 'Citia'
      },
      {
      'id': 3,
      'name': 'kisgugya'
      }
    ];

  toggle() {
    this.show = !this.show;
    this.inputContent = 'hello, pisti, sanyi, csár';
  }

  demo(ev: MouseEvent) {
    console.log(ev.screenX);
  }
}
