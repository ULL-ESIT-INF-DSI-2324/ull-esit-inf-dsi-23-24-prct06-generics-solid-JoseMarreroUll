import { Enser } from './enser';

/**
 * Clase que representa una caja que puede contener enseres.
 * @param T Tipo de enser que puede contener la caja.
 * @property _contenido Lista de enseres que contiene la caja.
 * @method addEnser Añade un enser a la caja.
 * @method removeEnser Elimina un enser de la caja.
 * @method printContenido Imprime el contenido de la caja.
 * @method searchEnser Busca un enser en la caja.
 * @method contenido Devuelve el contenido de la caja.
 * @method constructor Constructor de la clase.
 */
export class Caja<T extends Enser> {
  private _contenido: T[];

  constructor(contenido? :T[]) {
    if (contenido) {
      this._contenido = contenido;
    } else {
      this._contenido = [];
    }
  }

  get contenido(): T[] {
    return this._contenido;
  }

  addEnser(enser: T): void {
    this._contenido.push(enser);
  }

  removeEnser(enser: T): void {
    const index = this._contenido.indexOf(enser);
    if (index > -1) {
      this._contenido.splice(index, 1);
    } else {
      throw new Error('El enser no se encuentra en la caja');
    }
  }

  printContenido(): void {
    console.log('Contenido de la caja:');
    this._contenido.forEach((enser) => {
      console.log('-->  ' + enser._nombre);
    });
  }

  searchEnser(enser: T): boolean {
    return this._contenido.includes(enser);
  }
}