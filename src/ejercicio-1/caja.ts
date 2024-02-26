import { Enser } from './enser';

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