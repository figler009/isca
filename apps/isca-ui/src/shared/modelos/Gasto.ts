export class Gasto {
    activo: boolean;
    area: string;
    clasificacion: string;
    codigo?: string;
    cuenta_analitica?: string;
    descripcion: string;
    fechaConfirmacion: Date;
    fechaCreacion: Date;
    fondo: string;
    moneda: string;
    monto: number = 0;
    otro_concepto?: string;
    referencia?: string;
    saldoAnterior: number = 0;
    solicitante: string;
    status: string = 'Nuevo';
    usuarioCreacion: string;
    movimientos: Array<movimientosClasificacion>;
    abierto: boolean;
    fecha: string;
    cerrado: boolean;
}

class movimientosClasificacion {
    fecha: Date;
    movimiento: string;
    usuarioCreacion: string;
}