import { Component, OnInit } from '@angular/core';
import { BoxServicesService } from './box/services/box-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [BoxServicesService],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
