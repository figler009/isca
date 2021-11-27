import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../../servicios/LoadingService';
import swal from 'sweetalert2';
import { filter } from 'rxjs/operator/filter';
let moment = require('moment');

@Injectable()
export class AdmnistracionMarcasService {
  constructor(private http: Http, private toastrService: ToastrService, private loadingService: LoadingService) { }
    obtenerPromocionesActuales(filtros){
      return this.http.post('/AdmonFondos/Promociones/obtenerPromociones',filtros).toPromise()
      .then(response => {
        return JSON.parse(response['_body']);
      })
      .catch(err => this.handleError(err));
    }
    obtenerCostoArticulos(){
      return this.http.post('/Catalogos/Articulos/ObtenerCostoPromedioArticulos', {}).toPromise()
      .then(response => {
        return JSON.parse(response['_body']);
      })
      .catch(err => this.handleError(err));
    }
    //Funcion para confirmar eliminar registros regresa una promesa
    _confirmarModal(datos, datosAlert){
      this.loadingService.hide();
      return new Promise ((resolve,reject)=>{
        swal({ title: datosAlert.Titulo,
          html: `<p class="">${datosAlert.Contenido}</p>`,
          type: datosAlert.Tipo,
          showCancelButton: true,
          cancelButtonColor:'#D33',
          confirmButtonText: datosAlert.Confirm
        }).then((result)=>{
          if(result.value){
            return resolve(true);
          }
        }).catch((err)=>{
          return reject(false);
        });
      });
    }

    private handleError(error: any): Promise<any> {
      console.log('error',error);
      this.loadingService.hide();
      this.toastrService[JSON.parse(error._body).errorType || 'error'](
        JSON.parse(error._body).errorMessage || 'Error no controlado',
        JSON.parse(error._body).errorTitle || 'Error de Petición'
      );
      return Promise.reject(error.errorMessage || error);
    }    

}
