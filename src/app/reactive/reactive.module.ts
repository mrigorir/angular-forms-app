import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { SwithcesPageComponent } from './pages/swithces-page/swithces-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BasicPageComponent,
    DynamicPageComponent,
    SwithcesPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveModule { }
