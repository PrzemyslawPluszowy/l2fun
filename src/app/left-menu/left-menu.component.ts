import { BoxServicesService } from '../main/box/services/box-services.service';

import { Component, OnChanges, OnInit, EventEmitter } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnChanges {
  constructor(private servicesService: BoxServicesService) {}

  ngOnChanges() {}
  recive(title: string): void {
    this.servicesService.title = title;
  }
}
