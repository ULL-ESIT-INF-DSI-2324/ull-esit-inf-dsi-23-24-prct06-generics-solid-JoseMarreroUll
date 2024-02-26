import { Enser } from './enser';

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