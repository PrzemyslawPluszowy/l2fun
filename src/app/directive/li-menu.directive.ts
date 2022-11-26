import {
  Directive,
  Renderer2,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appLiMenu]',
})
export class LiMenuDirective {
  @Input() onHover!: boolean;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngAfterViewInit() {
    console.log(this.onHover);
    this.liSphareAnimation();
  }
  liSphareAnimation() {
    // const widthLiMenu = this.elRef.nativeElement.getBoundingClientRect().width;
    // const heightLiMenu =
    //   this.elRef.nativeElement.getBoundingClientRect().height;
    const square = this.renderer.createElement('div');

    square.style.cssText = `
  height: 70px;
  width: 22px;
  position: absolute;
  top: 50%;
  left: -50px;
  transform: translateY(-50%);
background: rgb(238,238,238);
background: linear-gradient(39deg, rgba(238,238,238,1) 0%, rgba(0,139,255,0) 100%);
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
        duration: 500,
        iterations: 1,
      }
    );

    this.renderer.addClass(square, 'square-li-animation');
    this.renderer.appendChild(this.elRef.nativeElement, square);
  }
}
