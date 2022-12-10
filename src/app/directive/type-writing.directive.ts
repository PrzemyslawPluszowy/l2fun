import { Directive, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[typeWritingDirective]',
})
export class TypeWritingDirective {
  constructor(private renderer: Renderer2, private elRef: ElementRef) {
    this.stringToArray();
  }
  timeToRenderWord: number = 2000;

  members = [
    'Siwy',
    'Endrju',
    'Omen',
    'Misiek',
    'Kitchila',
    'Enespo',
    'Ania',
    'Katharsis',
    'Hasoll',
    'Ted',
    'Marcelus',
    'Athina',
    'Psyholl',
    'Nyna',
    'Metaloludek',
    'Otaro',
  ];

  stringToArray() {
    this.members.forEach((member, index) => {
      const nameToArray = [...member];

      setTimeout(() => {
        this.literateName(nameToArray);
      }, index * this.timeToRenderWord);
    });
  }

  literateName(name: string[]) {
    const timeWrite = this.timeToRenderWord / name.length;

    const div = this.renderer.createElement('div');
    this.renderer.appendChild(this.elRef.nativeElement, div);
    name.forEach((element, index) => {
      setTimeout(() => {
        const text = this.renderer.createText(element);
        const separatorSpan = this.renderer.createElement('span');
        const separator = this.renderer.createText('|');
        this.renderer.addClass(separatorSpan, 'separator');
        this.renderer.addClass(div, 'members-single');

        const span = this.renderer.createElement('span');
        this.renderer.appendChild(separatorSpan, separator);
        this.renderer.appendChild(span, text);
        this.renderer.appendChild(div, span);
        this.renderer.appendChild(div, separatorSpan);
        setTimeout(() => {
          this.renderer.removeChild(div, separatorSpan);
        }, timeWrite);
      }, index * timeWrite);
    });
  }
}
// const text = this.renderer.createText(element);
//
// // const separator = this.renderer.createText('|');
// const span = this.renderer.createElement('span');
// this.renderer.appendChild(separatorSpan, '|');

// this.renderer.appendChild(span, text);
// this.renderer.appendChild(div, span);
