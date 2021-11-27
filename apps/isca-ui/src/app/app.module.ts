import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
=======
import { ControlComponent } from './control/control.component';


>>>>>>> 9600bca70a638a26e5a5af37fdde863ed4815ffe

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule,
    MatCardModule
=======
    SharedModule
>>>>>>> 9600bca70a638a26e5a5af37fdde863ed4815ffe
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