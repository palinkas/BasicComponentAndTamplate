import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events = ['sziget', 'efott', 'fezen', 'balatonsound'];
  show = true;
  klikkeljunke = false;
  inputContent: string;

  toggle(){
    this.show = !this.show;
    this.inputContent = 'hello, pisti, sanyi, csár';
  }

  demo(ev: MouseEvent){
    console.log(ev.screenX);
  }
}
