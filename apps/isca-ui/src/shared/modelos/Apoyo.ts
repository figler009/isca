import { Producto } from './Producto';

export class Apoyo {
  descripcion: string;
  proveedor: string;
  fondo: string;
  compromiso_pago: Date;
  clasificacion: string;
  numCliente: string;
  moneda: string;
  tipo_cambio: number;
  monto: number;
  solicitante: string;
  pagos: Pago[];
  fechaCreacion?: Date;
  cuenta_analitica: string;
  otro_concepto?: string;
  rebaja: boolean;
  productos: Producto[];
  inicio?: Date;
  fin?: Date;
  tipo?: string;
  marca: string;
  codigo: string;
  metodo_pago_tentativo: string;
  requiereFactura: boolean;
  folioFactura?: string;
  status: string;
};

class Pago {

}
