import { Arithmeticable } from "./arithmeticable";

export class Complex implements Arithmeticable<Complex> {
  private _real :number;
  private _imaginaria :number;

  constructor(real :number, imaginaria :number) {
    this._real = real;
    this._imaginaria = imaginaria;
  }

  get real() :number {
    return this._real;
  }

  get imaginaria() :number {
    return this._imaginaria;
  }

  set real(real :number) {
    this._real = real;
  }

  set imaginaria(imaginaria :number) {
    this._imaginaria = imaginaria;
  }

  add(num1 :Complex) :Complex {
    const newReal = this.real + num1.real;
    const newImaginaria = this.imaginaria + num1.imaginaria;
    return new Complex (newReal, newImaginaria);
  }

  substract(num1 :Complex) :Complex {
    const newReal = this.real - num1.real;
    const newImaginaria = this.imaginaria - num1.imaginaria;
    return new Complex (newReal, newImaginaria);
  }

  multiply(num1 :Complex) :Complex {
    const newReal = (this.real * num1.real) - (this.imaginaria * num1.imaginaria);
    const newImaginaria = (this.real * num1.imaginaria) + (this.imaginaria * num1.real);
    return new Complex (newReal, newImaginaria);
  }

  divide(num1 :Complex) :Complex {
    const denominador = (num1.real * num1.real) + (num1.imaginaria * num1.imaginaria);
    const newReal = ((this.real * num1.real) + (this.imaginaria * num1.imaginaria)) / denominador;
    const newImaginaria = ((this.imaginaria * num1.real) - (this.real * num1.imaginaria)) / denominador;
    return new Complex (newReal, newImaginaria);
  }
}