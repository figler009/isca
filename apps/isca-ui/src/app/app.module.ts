import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
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
    BrowserAnimationsModule,
    MatCardModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

// export class CardMediaSizeExample {
//   longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
//   from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
//   originally bred for hunting.`;
// }
