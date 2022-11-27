import {
  Directive,
  Renderer2,
  ElementRef,
  Input,
  OnChanges,
} from '@angular/core';

@Directive({
  selector: '[appAnim]',
})
export class LiMenuDirective implements OnChanges {
  @Input() appAnim!: boolean;

  ngOnChanges() {
    if (this.appAnim) {
      this.createSquare();
    } else {
      clearInterval(this.interval1);
      this.elRef.nativeElement.style.cssText = `
    
     text-shadow: none`;
    }
  }

  interval1: any;
  intervals: [] = [];
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  createSquare() {
    this.elRef.nativeElement.style.cssText = `
    
     text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);`;

    this.interval1 = setInterval(() => {
      const randomYPos = Math.floor(Math.random() * 95);

      const squareAnim = this.renderer.createElement('div');
      squareAnim.style.cssText = `
      position: absolute;
  width: 20px; 
  height: 20px;
  top:${randomYPos}%;
  transition: translateY(-50%)
  
  border: 1px solid ;
  
  z-index: 0;
`;
      squareAnim.animate(
        [
          {
            left: '-200px',
            background: 'white',
            border: 'rgba(255, 99, 71, 0)',
          },

          {
            left: '100%',
            background: 'transparent',
            border: '1px solid white',
            opacity: 0,
          },
        ],
        {
          duration: 2000,
          iterations: 1,
        }
      );

      this.renderer.appendChild(this.elRef.nativeElement, squareAnim);

      setTimeout(() => {
        this.renderer.removeChild(this.elRef.nativeElement, squareAnim);
      }, 2000);
    }, 500);
  }
}
