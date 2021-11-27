export class Empleado {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    fechaNacimiento: Date;
    sexo: string;
    informacionNomina: informacionNomina;
    informacionAdicional: informacionAdicional;
    asistencias?: asistencias[];
}

class informacionNomina {

}

class informacionAdicional {
    gradoIngles: string;
    experienciaIngles?: string;
}

class asistencias {
    fechaAsistencia?: string;
}