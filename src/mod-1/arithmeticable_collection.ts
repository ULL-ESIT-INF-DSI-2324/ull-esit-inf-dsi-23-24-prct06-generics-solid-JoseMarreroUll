import { Arithmeticable } from "./arithmeticable";

export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  public _elements :T[] = []

  addAritmeticable(element :T) :void {
    this._elements.push(element);
  }

  getArithmeticable(index :number) :T {
    return this._elements[index];
  }

  getNumberOfArithmeticables() :number {
    return this._elements.length;
  }

  get elements() {
    return this._elements;
  }
}