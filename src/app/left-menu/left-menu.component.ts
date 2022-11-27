import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit, AfterViewInit {
  @ViewChild('on') one!: ElementRef;
  onHover: boolean = false;
  constructor() {}
  ngAfterViewInit() {
    console.log(this.one);
  }
  ngOnInit(): void {}
}
