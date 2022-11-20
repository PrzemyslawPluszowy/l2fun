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
import { BoxServicesService } from './main/box/services/box-services.service';
import { BgDirective } from './directive/bg.directive';

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
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
