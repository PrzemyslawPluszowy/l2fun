import { Component, OnInit } from '@angular/core';
import { BoxServicesService } from './../main/box/services/box-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public boxServicesService: BoxServicesService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
