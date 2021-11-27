import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ControlComponent } from './control/control.component';
import { CrudTestComponent } from './crud-test/crud-test.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ControlComponent,
    CrudTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
