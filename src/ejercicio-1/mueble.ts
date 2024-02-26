import { Enser } from './enser';

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