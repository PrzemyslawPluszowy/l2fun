import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('enterTrigger', [
      state(
        'fadeIn',
        style({
          opacity: '1',
          transform: 'rotateY(0deg)',
        })
      ),
      transition('void => *', [
        style({ opacity: '0', transform: 'rotateY(90deg)' }),
        animate('500ms'),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'husaria';
  mobile: boolean = true;
  @HostListener('window:resize', [])
  onResize() {
    let width = window.innerWidth;
    this.mobile = width > 1100;
  }
  ngOnInit() {}
  getUrl() {
    return "url('../assets/img/bg/lol.jpg')";
  }

  bg = { link: "background-image: url('../assets/img/bg/lol.jpg') }" };
}
