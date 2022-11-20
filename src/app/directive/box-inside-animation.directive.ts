import {
  AfterViewInit,
  Directive,
  ElementRef,
  Renderer2,
  OnDestroy,
} from '@angular/core';

@Directive({
  selector: '[appBoxInsideAnimation]',
})
export class BoxInsideAnimationDirective implements AfterViewInit, OnDestroy {
  ngAfterViewInit() {
    this.startAnim();
  }

  ngOnDestroy() {
    this.stopAnim();
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  animateColor: number = 100;
  direction: number = 0;
  interval: any;

  stopAnim() {
    clearInterval(this.interval);
  }

  startAnim() {
    this.elRef.nativeElement.classList.add('animate-Hero');

    this.interval = setInterval(() => {
      switch (this.direction) {
        case 0:
          this.animateColor++;
          break;
        case 1:
          this.animateColor--;
          break;
      }

      if (this.animateColor === 200) {
        this.direction = 1;
      }
      if (this.animateColor === 130) {
        this.direction = 0;
      }

      this.elRef.nativeElement.parentElement.style.background = `linear-gradient(0deg, rgba(16, 158, 224, 1) 0%,  rgb(29, ${this.animateColor}, 175) 60%, rgba(119, ${this.animateColor}, 255, 1) 100%)`;
    }, 20);
  }
}
