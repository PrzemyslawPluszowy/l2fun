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
  constructor() {
    interface Game {
      title: string;
      desc: string;
      img: string;
      imgOnHover: string;
    }
  }

  boxesGame = [
    {
      title: 'Legue of Legend',
      desc: 'Play on Eu servers',
      img: '../../../assets/img/box/ashe-purple.jpg',
      imgOnHover: '../../../assets/img/box/ashe.png',
    },
    {
      title: 'Battlefield',
      desc: 'Battlefield I & V',
      img: '../../../assets/img/box/bf-purple.jpg',
      imgOnHover: '../../../assets/img/box/bf.png',
    },
    {
      title: 'Back4Blood',
      desc: 'Back 4 Blood',
      img: '../../../assets/img/box/bf-purple.jpg',
      imgOnHover: '../../../assets/img/box/bf.png',
    },
    {
      title: 'Back4Blood',
      desc: 'Back 4 Blood',
      img: '../../../assets/img/box/bf-purple.jpg',
      imgOnHover: '../../../assets/img/box/bf.png',
    },
  ];

  ngOnInit(): void {}
}
