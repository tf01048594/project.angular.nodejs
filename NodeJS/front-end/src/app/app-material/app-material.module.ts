import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatSliderModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
