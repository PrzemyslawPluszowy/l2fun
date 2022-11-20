import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BoxServicesService } from './box/services/box-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
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
export class MainComponent implements OnInit {
  constructor() {}
  boxesGame = [
    {
      title: 'Legue OF Legend',
      desc: 'Play on Eu servers',
      img: '../../../assets/img/box/ashe-purple.jpg',
      imgOnHover: '../../../assets/img/box/ashe.png',
    },
    {
      title: 'Battlefield',
      desc: 'Battlefield I & V',
      img: '../../../assets/img/box/ashe-purple.jpg',
      imgOnHover: '../../../assets/img/box/ashe.png',
    },
  ];

  ngOnInit(): void {}
}
