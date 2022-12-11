import { Component, OnInit } from '@angular/core';
import { BoxServicesService } from './services/box-services.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],

  providers: [BoxServicesService],
})
export class BoxComponent {
  constructor(private boxServices: BoxServicesService) {}
  onHover: boolean = false;
}
