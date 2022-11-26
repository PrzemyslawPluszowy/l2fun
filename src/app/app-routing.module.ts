import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MembersComponent } from './members/members.component';
import { SpotComponent } from './spot/spot.component';

const routes: Routes = [
  { path: '', redirectTo: '/game', pathMatch: 'full' },
  { path: 'game', component: MainComponent },
  { path: 'members', component: MembersComponent },
  { path: 'spot', component: SpotComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
