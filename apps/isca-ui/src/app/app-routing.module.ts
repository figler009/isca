import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './control/control.component';
import { AppComponent } from './app.component';
import { CrudTestComponent } from './crud-test/crud-test.component';
import { MainComponent } from './main/main.component';

const routes:Routes=[
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component:MainComponent},
  { path:'control', component: ControlComponent},
  { path:'crud-test', component: CrudTestComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
