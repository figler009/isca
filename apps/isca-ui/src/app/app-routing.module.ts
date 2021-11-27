import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { AppComponent } from './app.component';

const routes:Routes=[
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component:AppComponent},
  { path:'control', component: ControlComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
