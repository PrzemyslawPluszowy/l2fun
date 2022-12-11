import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MainComponent } from './main/main.component';
import { BoxComponent } from './main/box/box.component';
import { BoxDirectiveDirective } from './directive/box-directive.directive';
import { BoxInsideAnimationDirective } from './directive/box-inside-animation.directive';
import { BgDirective } from './directive/bg.directive';
import { LiMenuDirective } from './directive/li-menu.directive';
import { MembersComponent } from './members/members.component';
import { SpotComponent } from './spot/spot.component';
import { TodayGameComponent } from './today-game/today-game.component';
import { ShuffleDirective } from './directive/shuffle.directive';
import { TypeWritingDirective } from './directive/type-writing.directive';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { PageNotfoundComponentComponent } from './page-notfound-component/page-notfound-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    MainComponent,
    BoxComponent,
    BoxDirectiveDirective,
    BoxInsideAnimationDirective,
    BgDirective,
    LiMenuDirective,
    MembersComponent,
    SpotComponent,
    TodayGameComponent,
    ShuffleDirective,
    TypeWritingDirective,
    MenuMobileComponent,
    PageNotfoundComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
