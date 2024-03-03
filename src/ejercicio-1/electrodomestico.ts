import { Enser } from './enser';

/**
 * Clase que representa un electrodomestico.
 * @param _nombre Nombre del electrodomestico.
 * @param _peso Peso del electrodomestico.
 * @param _etiquetaEnergetica Etiqueta energetica del electrodomestico.
 */
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