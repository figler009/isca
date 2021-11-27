import { Contacto } from './Contacto';

export class Cliente {
  rfc: string;
  ciudad: string;
  clave: string;
  codigo_postal: string;
  direccion: string;
  estado: string;
  nombre: string;
  colonia: string;
  contacto: Contacto[];
  plazo: number;
}
