import {
  Directive,
  Renderer2,
  ElementRef,
  ViewChild,
  Input,
  HostListener,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
} from '@angular/core';

@Directive({
  selector: '[appAnim]',
})
export class LiMenuDirective implements AfterViewInit, AfterViewChecked {
  @Input() appAnim!: boolean;
  ngAfterViewInit() {
    console.log(this.appAnim);
  }
  ngAfterViewChecked() {
    console.log(this.appAnim);
  }
  // if (this.appAnim) {
  //   this.liSphareAnimation();
  // } else {
  //   clearInterval(this.intervalDirection);
  //   clearInterval(this.interval);
  // }

  widthRandom: number = 400;
  direction: number = 0;
  interval: any;
  intervalDirection: any;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  createSquare() {
    setInterval(() => {
      const randomXYSquare = Math.floor(Math.random() * (80 - 20 - 1) + 20);

      const randomYPos = Math.floor(Math.random() * (100 - randomXYSquare + 1));

      const squareAnim = this.renderer.createElement('div');

      squareAnim.style.cssText = `
  width: ${randomXYSquare}px; 
  height: ${randomXYSquare}px;
  top:0px;
  left: -100px;
  
  animation: SquareRight 2s;
  z-index: 0;
`;

      this.renderer.appendChild(this.elRef.nativeElement, squareAnim);
    }, 100);
  }

  liSphareAnimation() {
    const squareBig = this.renderer.createElement('div');
    this.renderer.appendChild(this.elRef.nativeElement, squareBig);
    this.intervalDirection = setInterval(() => {
      switch (this.direction) {
        case 0:
          this.widthRandom++;
          break;
        case 1:
          this.widthRandom--;
          break;
      }

      if (this.widthRandom === 550) {
        this.direction = 1;
      }
      if (this.widthRandom === 500) {
        this.direction = 0;
      }

      squareBig.style = `
  height: 100px;
  width: ${this.widthRandom}px;
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
  z-index:-1;
  

    

background: rgb(133,173,204);
background: linear-gradient(39deg, rgba(133,173,204,0.7) 0%, rgba(5,140,253,0.0718662464985994) 81%, rgba(1,139,255,0) 96%, rgba(0,139,255,0) 100%);
`;
    }, 30);

    this.interval = setInterval(() => {
      const randomHeight = Math.floor(Math.random() * (60 - 40 + 1) + 40);
      const square = this.renderer.createElement('div');

      square.style.cssText = `
  height: 70px;
  width: 22px;
  position: absolute;
  top: ${randomHeight}%;
  left: -50px;
  transform: translateY(-50%);
   z-index:-1;
    

background: rgb(242,242,242);
background: linear-gradient(39deg, rgba(242,242,242,1) 0%, rgba(5,140,253,0.0718662464985994) 81%, rgba(1,139,255,0) 96%, rgba(0,139,255,0) 100%);;
`;
      square.animate(
        [
          // key frames
          { height: '5px' },
          { width: '50px' },
          { height: '15px' },

          { width: '500px' },
          { height: '0px' },
        ],
        {
          // sync options
          duration: 1000,
          iterations: 1,
        }
      );

      this.renderer.addClass(square, 'square-li-animation');
      this.renderer.appendChild(this.elRef.nativeElement, square);
      console.log(randomHeight);
    }, 600);
  }
}
