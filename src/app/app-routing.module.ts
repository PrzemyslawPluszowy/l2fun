import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MembersComponent } from './members/members.component';
import { SpotComponent } from './spot/spot.component';
import { TodayGameComponent } from './today-game/today-game.component';

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: MainComponent },
  { path: 'members', component: MembersComponent },
  { path: 'info', component: SpotComponent },
  { path: 'TodayGame', component: TodayGameComponent },
  { path: '**', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
