import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'husaria';
  mobile: boolean = true;
  @HostListener('window:resize', [])
  onResize() {
    let width = window.innerWidth;
    this.mobile = width > 1300;
  }
  ngOnInit() {}
}
