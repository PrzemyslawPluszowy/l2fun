import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { from, Observable, observable, of } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class BoxServicesService implements OnInit {
  constructor() {}
  dataHoverUpdate = new EventEmitter<boolean>();
  onHover!: boolean;
  title!: string;

  ngOnInit() {}
}
