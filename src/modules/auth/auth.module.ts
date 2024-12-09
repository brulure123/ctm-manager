import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthComponent,
    AuthRoutingModule
  ]
})
export class AuthModule { }
