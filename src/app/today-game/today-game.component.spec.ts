import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayGameComponent } from './today-game.component';

describe('TodayGameComponent', () => {
  let component: TodayGameComponent;
  let fixture: ComponentFixture<TodayGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
