import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appSquareDirective]',
})
export class BoxDirectiveDirective implements AfterViewInit, OnDestroy {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  createSquareInterval: any;
  ngAfterViewInit(): void {
    this.createSquare();
    this.createShadow();
  }
  ngOnDestroy(): void {
    clearInterval(this.createSquareInterval);
  }

  createShadow() {
    const wrapDiv = this.elRef.nativeElement;
    wrapDiv.style.cssText = `
   ;
    animation: boxShadow infinite 1s alternate;
    `;
  }

  createSquare() {
    this.createSquareInterval = setInterval(() => {
      const widthObjectAnimation =
        this.elRef.nativeElement.getBoundingClientRect().right -
        this.elRef.nativeElement.getBoundingClientRect().left;
      const heightObjectAnimation =
        this.elRef.nativeElement.getBoundingClientRect().bottom -
        this.elRef.nativeElement.getBoundingClientRect().top;

      const randomXYSquare = Math.floor(Math.random() * (80 - 20 - 1) + 20);
      const randomXPos = Math.floor(
        Math.random() * (widthObjectAnimation - randomXYSquare + 1) +
          randomXYSquare
      );
      const randomYPos = Math.floor(
        Math.random() * (heightObjectAnimation - randomXYSquare + 1)
      );

      const divTop = this.renderer.createElement('div');
      const divLeft = this.renderer.createElement('div');
      const divRight = this.renderer.createElement('div');
      const divBottom = this.renderer.createElement('div');

      divTop.style.cssText = `
  width: ${randomXYSquare}px; 
  height: ${randomXYSquare}px;
  top:0px;
  left: ${randomXPos - randomXYSquare}px;
  
  animation: SquareTop 2s;
  z-index: 0;
`;
      divLeft.style.cssText = `
width: ${randomXYSquare}px; 
height: ${randomXYSquare}px;
left: 0px;
top:${randomYPos}px;

animation: SquareLeft 2s;
z-index: 0;
`;

      divBottom.style.cssText = `

width: ${randomXYSquare}px; 
height: ${randomXYSquare}px;
left: ${randomXPos - randomXYSquare}px;
bottom: 0px;

animation: SquareBottom 2s;
z-index: 0;
`;
      divRight.style.cssText = `
width: ${randomXYSquare}px; 
  height: ${randomXYSquare}px;
  right: 0px;
  top:${randomYPos}px;
  
  animation: SquareRight 2s;
  z-index: 0;
`;

      this.renderer.addClass(divTop, 'outside-animation');
      this.renderer.appendChild(this.elRef.nativeElement, divTop);
      this.renderer.addClass(divLeft, 'outside-animation');
      this.renderer.appendChild(this.elRef.nativeElement, divLeft);
      this.renderer.addClass(divBottom, 'outside-animation');
      this.renderer.appendChild(this.elRef.nativeElement, divBottom);
      this.renderer.addClass(divRight, 'outside-animation');
      this.renderer.appendChild(this.elRef.nativeElement, divRight);
      setTimeout(() => {
        this.renderer.removeChild(this.elRef.nativeElement, divTop);
        this.renderer.removeChild(this.elRef.nativeElement, divLeft);
        this.renderer.removeChild(this.elRef.nativeElement, divRight);
        this.renderer.removeChild(this.elRef.nativeElement, divBottom);
      }, 1000);
    }, 200);
  }
}
