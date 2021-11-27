import { Movimiento } from './Movimiento';
import { ComentarioDocumento } from './ComentarioDocumento';
import { Producto } from './Producto';

export class Pedido {
  codigo: string;
  usuario: string;
  subtotal: number;
  iva: number;
  total: number;
  cliente: string;
  direccionEntrega: string;
  sucursal: string;
  tipodecambio: number;
  tipoDocumento: number;
  plazo: string;
  metodoPago: string;
  movimientos: Movimiento[];
  comentarios: ComentarioDocumento[];
  productos: Producto[] = [];
  activo: boolean;
  estatus: string;
  pedidosMacroPro: pedidoMacroPro[];
  checked?: any;
};

class pedidoMacroPro {
  tipo: string;
  folio: string;
  almacen: string;
  pedido: string;
}

