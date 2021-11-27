export class Producto {
  cantidad: number;
  direccionEntrega?: string;
  descripcion: string;
  clave: string;
  almacen: string;
  sucursal?: string;
  existencia?: number;
  error?: string;
  mensaje?: string;
  importe: number;
  precio: number;
  moneda: string;
  tipoDocumento: string;
  tipoCambio?: number;
  similares?: Array<any>;
}
