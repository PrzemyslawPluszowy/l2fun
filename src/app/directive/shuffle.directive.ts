import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appShuffle]',
})
export class ShuffleDirective {
  constructor(private elRef: ElementRef, private render: Renderer2) {
    this.createElmToAnimation();
  }
  @HostListener('click') click() {
    if (this.fireBlock) {
      this.fireBlock = false;
      this.reset();
      this.startShuffle();
      this.heightSingleCard = this.elRef.nativeElement.clientHeight;
      this.heightAllCard = this.elRef.nativeElement.nextSibling.height;
    } else {
      console.log('block');
    }
  }

  //config
  amountCard: number = 6;
  speedShuffle: number = 10;

  //interval
  shufleInterval: any;
  slowDownInterval: any;
  checkPosition: any;
  img!: HTMLBRElement;
  nextShufleSpan!: HTMLElement;
  fireBlock = true;

  heightSingleCard: number = 0;
  heightAllCard = parseInt(this.elRef.nativeElement.height);

  shufflePositionTop: number = 0;
  randomCard = 0;

  subtitleShuffleAgain() {
    this.nextShufleSpan = this.render.createElement('span');
    const texShufle = this.render.createText('Shuffle Again');
    this.render.addClass(this.nextShufleSpan, 'subtitle');
    this.render.appendChild(this.nextShufleSpan, texShufle);
    this.render.addClass(this.nextShufleSpan, 'hoverNext');
    this.render.appendChild(
      this.elRef.nativeElement.parentElement,
      this.nextShufleSpan
    );
  }
  createElmToAnimation() {
    this.img = this.render.createElement('img');
    this.nextShufleSpan = this.render.createElement('span');
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
    this.render.removeChild(this.elRef.nativeElement, this.nextShufleSpan);
    this.heightSingleCard = 0;
    this.shufflePositionTop = 0;
    this.speedShuffle = 10;
    this.heightAllCard = parseInt(this.elRef.nativeElement.clientHeight);
  }

  stopShuffle() {
    this.shufleCard();
    this.checkPosition = setInterval(() => {
      if (
        this.shufflePositionTop > this.randomCard - 4 &&
        this.shufflePositionTop < this.randomCard + 4
      ) {
        this.elRef.nativeElement.style.cssText = `
          
            opacity: 0;
                //  top: ${this.randomCard}px;

        `;
        this.elRef.nativeElement.nextSibling.style.cssText = `
          
            // opacity: 0;
                 top: ${this.randomCard}px;

        `;
        clearInterval(this.shufleInterval);
        clearInterval(this.checkPosition);
        console.log('stop');
        setTimeout(() => {
          this.subtitleShuffleAgain();
        }, 1000);

        this.fireBlock = true;
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
