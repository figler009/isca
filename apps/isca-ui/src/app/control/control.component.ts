import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { faPlusCircle, faSearch, faPencilAlt, faTimesCircle, faTimes
} from '@fortawesome/free-solid-svg-icons';


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
  faTimes = faTimes;

  //variables
  error:boolean=false;
  buscar = '';
  enfermedad = ''
  atributosb;
  idactual:number=0;
  enfermedades = []
  //modal
  titulomodal= 'Agregar'
  abrircerrar:boolean=false;
  tipos:boolean=false;
  constructor(private http: HttpClient) { 
    this.atributosb = ['id_enfermedad', 'nombre', 'fecha_ingreso']
   }
  ngOnInit(): void {
    this.cargar2()
  }

  cargar(){
    this.http.get('http://localhost:3200/api/enfermedades').toPromise()
    .then((respuesta:any)=>{
      this.enfermedades = respuesta
    })
  }

  cargar2(){
    let datos = {
      fecha: '2022/01/27'
    }
    this.http.post('http://localhost:3200/api/enfermedades2',datos).toPromise()
    .then((respuesta:any)=>{
      this.enfermedades = respuesta
    })
  }
  
  abrir(vari:boolean){
    this.abrircerrar=vari==true?this.abrircerrar=true:this.abrircerrar=false

    if(this.abrircerrar==false){
      this.enfermedad=''
    }
  }

  cambio(tipo:number,enf:string,id:number){
    this.titulomodal=tipo==1?this.titulomodal='Agregar':this.titulomodal='Modificar '+enf
    this.tipos=tipo==1?this.tipos=false:this.tipos=true
    this.idactual=id
  }

  actualizar(){}

  agregar(){
    if(this.enfermedad.trim()==''){
      this.errores(true)
    }else{
    let fechas ='hoy neta hoy'
    let ultimo:any = this.enfermedades[this.enfermedades.length-1];
    let idnueva = ultimo.id + 1
    //this.enfermedades.push({id: idnueva,enfermedad: this.enfermedad, fecha: ''+fechas})
    this.limpiar()}
  }

  modificar(){
    if(this.enfermedad.trim()==''){
      this.errores(true)
    }else{
      // let modificado:any=this.enfermedades.filter(e=>{
      //   if(e.id == this.idactual){
      //     e.enfermedad=this.enfermedad
      //     e.fecha='hoy neta hoy'
      //   }
      // }) 
      this.limpiar()
    }   
  }

  eliminar(id:any){
    // this.enfermedades=this.enfermedades.filter(e=>e.id != id)
  }

  limpiar(){
    this.abrircerrar=false
    this.enfermedad=''
  }

  errores(vari:boolean){
    this.error=vari==true?this.error=true:this.error=false

    if(this.error==true){
      this.enfermedad=''
      this.abrircerrar=false
    }
  }
}
