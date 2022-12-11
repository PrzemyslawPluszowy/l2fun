import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotfoundComponentComponent } from './page-notfound-component.component';

describe('PageNotfoundComponentComponent', () => {
  let component: PageNotfoundComponentComponent;
  let fixture: ComponentFixture<PageNotfoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotfoundComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNotfoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
