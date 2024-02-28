import { Arithmeticable } from "./arithmeticable";

export class Rational implements Arithmeticable<Rational> {
  private _numerador :number;
  private _denominador :number;

  constructor (numerador :number, denominador :number) {
    this._numerador = numerador;
    if (denominador === 0) throw new Error('No se puede inicializar un racional con denominador 0')
    this._denominador = denominador;
  }

  get numerador() :number {
    return this._numerador
  }

  get denominador() :number {
    return this._denominador
  }

  set numerador(numerador :number) {
    this._numerador = numerador;
  }

  set denominador(denominador :number) {
    this._denominador = denominador;
  }

  mcd() :number {
    const aux_num  = new Rational (this.numerador, this.denominador);
    while (aux_num.denominador !== 0) {
      const temp = aux_num.denominador;
      aux_num.denominador = aux_num.numerador % aux_num.denominador;
      aux_num.numerador = temp;
    }
    return Math.abs(aux_num.numerador);
  }

  simplifyRational(): Rational {
    const gcd = this.mcd();
    this.numerador /= gcd;
    this.denominador /= gcd;
    const simplified_num = new Rational (this.numerador, this.denominador);
    return simplified_num;
  }

  abs(): Rational {
    this.numerador = Math.abs(this.numerador);
    this.denominador = Math.abs(this.denominador);
    return this.simplifyRational();
  }

  inv(): Rational | undefined {
    if (this.numerador === 0) {
        return undefined;
    }
    const temp = this.numerador;
    this.numerador = this.denominador;
    this.denominador = temp;
    return this.simplifyRational();
  }

  add(rational1: Rational): Rational {
    const commonDenom = this.denominador * rational1.denominador;
    const commonNum = this.numerador * rational1.denominador + rational1.numerador * this.denominador;
    const solution = new Rational (commonNum, commonDenom);
    return solution.simplifyRational();
  }

  substract(rational1: Rational): Rational {
    const commonDenom = this.denominador * rational1.denominador;
    const commonNum = this.numerador * rational1.denominador - rational1.numerador * this.denominador;
    const solution = new Rational (commonNum, commonDenom);
    return solution.simplifyRational();
  }

  multiply(rational1: Rational): Rational {
    const productNum = this.numerador * rational1.numerador;
    const productDenom = this.denominador * rational1.denominador;
    const solution = new Rational (productNum, productDenom);
    return solution.simplifyRational();
  }

  divide (rational1: Rational): Rational | undefined {
    if (rational1.numerador === 0) {
        return undefined;
    }
    const quotientNum = this.numerador * rational1.denominador;
    const quotientDenom = this.denominador * rational1.numerador;
    const solution = new Rational (quotientNum, quotientDenom);
    return solution.simplifyRational();
  }
}