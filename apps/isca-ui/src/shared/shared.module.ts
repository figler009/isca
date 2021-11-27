import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ColorsService } from './colors/colors.service';
// import { FlotDirective } from './directives/flot/flot.directive';



//Shared 
// import { DatatableModule} from './componentes/datatables-general/datatables-general.module';
// import { StatModule } from './componentes/stat/stat.module';
// import { TablesModule } from './componentes/tables/tables.module';
// import { HeadModule  } from './componentes/head/head.module';

// export function highchartsFactory() {
//   return require('highcharts');
// }

import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // DatatableModule,
    // StatModule,
    // HeadModule,
    // TablesModule,
    ReactiveFormsModule,
  ],
  providers: [
    ColorsService,
  ],
  declarations: [
    // FlotDirective,
    FilterPipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    // FlotDirective,
    FilterPipe,
    // DatatableModule,
    // StatModule,
    // HeadModule,
    // TablesModule,
  ]
})
export class SharedModule { }
