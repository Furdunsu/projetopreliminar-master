import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagLoginPageRoutingModule } from './pag-login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { PagLoginPage } from './pag-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagLoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PagLoginPage]
})
export class PagLoginPageModule {}
