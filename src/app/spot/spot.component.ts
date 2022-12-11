import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spot',
  templateUrl: './spot.component.html',
  styleUrls: ['./spot.component.scss'],
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
        style({ opacity: '50%', transform: 'rotateY(90deg)' }),
        animate('1000ms'),
      ]),
    ]),
  ],
})
export class SpotComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
