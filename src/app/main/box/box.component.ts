import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BoxServicesService } from './services/box-services.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
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
  providers: [BoxServicesService],
})
export class BoxComponent {
  constructor(private boxServices: BoxServicesService) {}
  onHover: boolean = false;
}
