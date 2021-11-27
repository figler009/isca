import { Component, OnInit } from '@angular/core';
// ./control.component.css'
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  buscar = '';
  constructor() { }

  ngOnInit(): void {
  }

}
