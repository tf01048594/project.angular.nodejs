import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from '../components/home/home.component';
import {IntroduceComponent} from '../components/introduce/introduce.component';

const appRoutes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'introduce', component: IntroduceComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class CustomRouterModule { }
