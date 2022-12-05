import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appShuffle]',
})
export class ShuffleDirective {
  constructor(private elRef: ElementRef, private render: Renderer2) {
    // this.elRef.nativeElement.style.cssText = `
    //   top: ${this.shufflePositionTop}px;
    // filter: grayscale(1);
    // `;
    // this.addModal();
    this.createElmToAnimation();
  }
  @HostListener('click') click() {
    // this.reset();
    this.startShuffle();
    this.heightSingleCard = this.elRef.nativeElement.clientHeight;
    this.heightAllCard = this.elRef.nativeElement.nextSibling.height;
  }

  //config
  amountCard: number = 6;
  speedShuffle: number = 10;

  //interval
  shufleInterval: any;
  slowDownInterval: any;
  checkPosition: any;
  img: any;
  heightSingleCard: number = 0;
  heightAllCard = parseInt(this.elRef.nativeElement.height);

  shufflePositionTop: number = 0;
  randomCard = 0;

  // addModal() {
  //   const div = this.render.createElement('div');
  //   div.classList.add('active');
  //   this.render.appendChild(this.elRef.nativeElement.nextSibling.parentElement, div);
  // }

  createElmToAnimation() {
    this.img = this.render.createElement('img');
    this.render.setAttribute(
      this.img,
      'src',
      '../../../assets/img/shuffle/shuffle.jpg'
    );
    this.render.appendChild(this.elRef.nativeElement.parentElement, this.img);
  }

  reset() {
    clearInterval(this.shufleInterval);
    clearInterval(this.checkPosition);
    clearInterval(this.slowDownInterval);
    this.heightSingleCard = 0;
    this.shufflePositionTop = 0;
    this.speedShuffle = 10;
    this.heightAllCard = parseInt(this.elRef.nativeElement.clientHeight);
    this.elRef.nativeElement.style.cssText = `
     
      filter: blur(0px);
    
    `;
  }

  stopShuffle() {
    this.shufleCard();
    this.checkPosition = setInterval(() => {
      if (
        this.shufflePositionTop > this.randomCard - 4 &&
        this.shufflePositionTop < this.randomCard + 4
      ) {
        this.elRef.nativeElement.style.cssText = `
      top: ${this.randomCard}px;
      filter: blur(0px);
        filter: grayscale(0);
    
    `;

        clearInterval(this.shufleInterval);
        clearInterval(this.checkPosition);
        requestAnimationFrame(this.stopShuffle);
        console.log('stop');
      }
    }, 1);
  }

  shufleCard() {
    let heightRandom =
      Math.random() * (this.heightAllCard - this.heightSingleCard);
    this.randomCard =
      0 -
      Math.ceil(heightRandom / this.heightSingleCard) * this.heightSingleCard;
    console.log(this.randomCard);
  }

  startShuffle() {
    // requestAnimationFrame(this.startShuffle);
    setTimeout(() => {
      this.slowDownInterval = setInterval(() => {
        this.speedShuffle--;
        if (this.speedShuffle <= 2) {
          clearInterval(this.slowDownInterval);
          this.speedShuffle = 2;
          this.stopShuffle();
        }
      }, 200);
    }, 500);

    this.shufleInterval = setInterval(() => {
      this.shufflePositionTop = this.shufflePositionTop - this.speedShuffle;
      this.elRef.nativeElement.nextSibling.style.cssText = `
      top: ${this.shufflePositionTop}px;
    filter: blur(2px);
    filter: grayscale(0.2);
      
    `;
      if (
        this.shufflePositionTop <=
        -(this.elRef.nativeElement.nextSibling.height - this.heightSingleCard)
      ) {
        this.shufflePositionTop = 0;
      }
    }, 1);
  }
}
