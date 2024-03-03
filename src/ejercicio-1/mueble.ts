import { Enser } from './enser';

/**
 * Clase que representa un mueble.
 * @param _nombre Nombre del mueble.
 * @param _peso Peso del mueble.
 * @param _material Material del mueble.
 * @implements Enser
 */
export class Mueble implements Enser{
  _nombre: string;
  _peso: number;
  private _material: string;

  constructor(nombre: string, peso: number, material: string) {
    this._nombre = nombre;
    this._peso = peso;
    this._material = material;
  }
}