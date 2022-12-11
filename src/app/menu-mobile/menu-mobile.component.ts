import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss'],
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
export class MenuMobileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
