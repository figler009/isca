import { Component, OnInit, ViewChild } from '@angular/core';
import { faPlusCircle, faSearch, faPencilAlt, faTimesCircle 
} from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from 'src/shared/pipes/filter.pipe';

// ./control.component.css'
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {
  //iconos
  faPlusCircle = faPlusCircle;
  faSearch = faSearch;
  faPencilAlt = faPencilAlt;
  faTimesCircle = faTimesCircle;
  //variables
  buscar = '';

  enfermedades = [
    {enfermedad: 'Enfermedad 1', fecha: '2021/11/26'},
    {enfermedad: 'Enfermedad 2', fecha: '2021/11/26'},
    {enfermedad: 'Enfermedad 3', fecha: '2021/11/26'},
    {enfermedad: 'Enfermedad 4', fecha: '2021/11/26'},
    {enfermedad: 'Enfermedad 5', fecha: '2021/11/26'},
  ]
  //modal
  constructor() {  }
  ngOnInit(): void {
  }

}
