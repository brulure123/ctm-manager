import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserComponent,
    UserRoutingModule
  ]
})
export class UserModule { }