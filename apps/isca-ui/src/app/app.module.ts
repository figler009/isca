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
import { MainComponent } from './main/main.component';
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { EditDeseaseComponent } from './edit-desease/edit-desease.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ControlComponent,
    CrudTestComponent,
    MainComponent,
    EditDeseaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    SharedModule,
    AmplifyUIAngularModule
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
