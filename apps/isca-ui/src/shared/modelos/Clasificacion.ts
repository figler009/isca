export class Clasificacion {
    activo: boolean = false;
    clasificacion: string;
    codigo?: string;
    concepto: string;
    cuenta_contable?: string;
    movimientos?: Array<movimientosClasificacion>;
}

class movimientosClasificacion {
    fecha: Date;
    movimiento: string;
    referencia: string;
}