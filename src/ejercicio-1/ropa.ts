import { Enser } from './enser';

/**
 * Clase que representa una prenda de ropa.
 * @param _nombre Nombre de la prenda de ropa.
 * @param _peso Peso de la prenda de ropa.
 * @param _talla Talla de la prenda de ropa.
 * @implements Enser
 */
export class Ropa implements Enser {
  _nombre: string;
  _peso: number;
  private _talla: string;

  constructor(nombre: string, peso: number, talla: string) {
    this._nombre = nombre;
    this._peso = peso;
    this._talla = talla;
  }
}