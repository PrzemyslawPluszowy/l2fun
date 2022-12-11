import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBg]',
})
export class BgDirective {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.createSquare();
  }
  ///config animation bg
  maxAnimationSpeed: number = 80;
  minAnimationSpeed: number = 15;
  maxBoxSize: number = 200;
  minBoxSize: number = 50;
  animationDuration: number = 8000;
  amountBoxTimeGenerate: number = 1000;
  ///end config

  createSquare() {
    setInterval(() => {
      let moveRight = 0;
      let animateRight: any;
      const speedSquare = Math.floor(
        Math.random() * (this.maxAnimationSpeed - this.minAnimationSpeed) +
          this.minAnimationSpeed
      );
      const widthObjectAnimation = this.elRef.nativeElement.clientWidth;
      const heightObjectAnimation = this.elRef.nativeElement.clientHeight;
      const randomXYSquare = Math.floor(
        Math.random() * (this.maxBoxSize - this.minBoxSize - 1) +
          this.minBoxSize
      );
      const randomXPos = Math.floor(
        Math.random() * (widthObjectAnimation - randomXYSquare + 1) +
          randomXYSquare
      );
      const randomYPos = Math.floor(
        Math.random() * (heightObjectAnimation - randomXYSquare + 1)
      );

      const div = this.renderer.createElement('div');
      animateRight = setInterval(() => {
        moveRight++;
        div.style.cssText = `
  width: ${randomXYSquare}px; 
  height: ${randomXYSquare}px;
  top: ${randomYPos}px;
  left: ${randomXPos - randomXYSquare + moveRight}px;
  animation: square-bg ${this.animationDuration / 1000}s;`;
        setTimeout(() => {
          clearInterval(animateRight);
        }, this.animationDuration);
      }, speedSquare);

      this.renderer.addClass(div, 'bg-square-animation');

      this.renderer.setStyle(div, 'animation', 'square-bg 10s');
      this.renderer.appendChild(this.elRef.nativeElement, div);

      setTimeout(() => {
        this.renderer.removeChild(this.elRef.nativeElement, div);
      }, this.animationDuration);
    }, this.amountBoxTimeGenerate);
  }
}
