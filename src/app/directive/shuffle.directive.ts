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
  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.cssText = `
      top: ${this.shufflePositionTop}px;
    filter: grayscale(1);
      
    `;
  }
  @HostListener('click') click() {
    this.reset();
    this.startShuffle();
    this.heightSingleCard = this.elRef.nativeElement.height / this.amountCard;
    this.heightAllCard = parseInt(this.elRef.nativeElement.height);
  }

  //config
  amountCard: number = 6;
  speedShuffle: number = 10;

  //interval
  shufleInterval: any;
  slowDownInterval: any;
  checkPosition: any;

  heightSingleCard: number = 0;
  heightAllCard = parseInt(this.elRef.nativeElement.height);
  shufflePositionTop: number = 0;

  randomCard = 0;
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
        console.log(this.shufflePositionTop);

        clearInterval(this.shufleInterval);
        clearInterval(this.checkPosition);
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
    console.log(heightRandom);
  }

  startShuffle() {
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
      this.elRef.nativeElement.style.cssText = `
      top: ${this.shufflePositionTop}px;
    filter: blur(2px);
    filter: grayscale(0.2);
      
    `;
      if (
        this.shufflePositionTop <=
        -(this.elRef.nativeElement.height - this.heightSingleCard)
      ) {
        this.shufflePositionTop = 0;
      }
    }, 1);
  }
}
