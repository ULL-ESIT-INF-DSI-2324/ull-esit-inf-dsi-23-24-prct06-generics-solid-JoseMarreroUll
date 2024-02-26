import { Enser } from './enser';

export class Electrodomestico implements Enser {
  _nombre: string;
  _peso: number;
  private _etiquetaEnergetica: string;

  constructor(nombre: string, peso: number, etiquetaEnergetica: string) {
    this._nombre = nombre;
    this._peso = peso;
    this._etiquetaEnergetica = etiquetaEnergetica;
  }
}