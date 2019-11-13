import { BrowserModule,HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GestureConfig } from '@angular/material';
import {CustomRouterModule} from './custom-router/custom-router.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule} from './app-material/app-material.module';
import { HomeComponent } from './components/home/home.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { HttpClientModule } from '@angular/common/http';
import { TestService} from './services/test.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroduceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    CustomRouterModule,
    HttpClientModule
  ],
  providers: [{ provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
