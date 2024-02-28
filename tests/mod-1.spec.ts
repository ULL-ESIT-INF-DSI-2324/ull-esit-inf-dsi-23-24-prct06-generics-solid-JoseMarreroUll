import { expect } from 'chai';
import 'mocha';
//import { Arithmeticable } from '../src/mod-1/arithmeticable';
import { ArithmeticableCollection } from '../src/mod-1/arithmeticable_collection';
import { Rational } from '../src/mod-1/rational';
import { Complex } from '../src/mod-1/complex';

describe('Mod-1 tests', () => {
    let rational1 :Rational;
    let rational2 :Rational;
    let complex1 :Complex;
    let complex2 :Complex;
    let coleccion :ArithmeticableCollection<Rational | Complex>;
  
    beforeEach(() => {
      rational1 = new Rational (1, 4);
      rational2 = new Rational (3, 8);
      complex1 = new Complex (5, 8);
      complex2 = new Complex (7, 6);
      coleccion = new ArithmeticableCollection();
    });
  
    it('Se puede añadir racionales a un objeto de la clase ArithmeticableCollection', () => {
      coleccion.addAritmeticable(rational1)
      expect(coleccion.elements).to.deep.equal([rational1]);
    });

    it('Se puede añadir complejos a un objeto de la clase ArithmeticableCollection', () => {
        coleccion.addAritmeticable(complex1);
        expect(coleccion.elements).to.deep.equal([complex1]);
    });

    it('Se puede añadir complejos y racionales a un objeto de la clase ArithmeticableCollection', () => {
        coleccion.addAritmeticable(complex1);
        coleccion.addAritmeticable(rational1);
        expect(coleccion.elements).to.deep.equal([complex1, rational1]);
    });
    
    it('Se obtiene la longitud correcta de la ArithmeticableCollection', () => {
        coleccion.addAritmeticable(complex1);
        coleccion.addAritmeticable(rational1);
        coleccion.addAritmeticable(rational2);
        coleccion.addAritmeticable(complex2);
        expect(coleccion.getNumberOfArithmeticables()).to.eql(4);
    });

    it('Se obtiene el Aritmeticable correcto de la ArithmeticableCollection', () => {
        coleccion.addAritmeticable(complex1);
        coleccion.addAritmeticable(rational1);
        coleccion.addAritmeticable(rational2);
        coleccion.addAritmeticable(complex2);
        expect(coleccion.getArithmeticable(2)).to.eql(rational2);
    });

    it('Se suman números racionales correctamente', () => {
        const solution = new Rational(5, 8)
        expect(rational1.add(rational2)).to.eql(solution);
    });

    it('Se restan números racionales correctamente', () => {
        const solution = new Rational(-1, 8)
        expect(rational1.substract(rational2)).to.eql(solution);
    });

    it('Se multiplican números racionales correctamente', () => {
        const solution = new Rational(3, 32)
        expect(rational1.multiply(rational2)).to.eql(solution);
    });

    it('Se dividen números racionales correctamente', () => {
        const solution = new Rational(2, 3)
        expect(rational1.divide(rational2)).to.eql(solution);
    });

    it('No se puede dividir un racional entre otro que su numerador es 0', () => {
        const newParam = new Rational(0, 5)
        expect(rational1.divide(newParam)).to.be.undefined;
    });

    it('No se puede instanciar un racional con denominador 0', () => {
        expect(() => new Rational(8, 0)).to.throw('No se puede inicializar un racional con denominador 0')
    });

    it('Se suman números complejos correctamente', () => {
        const solution = new Complex(12, 14)
        expect(complex1.add(complex2)).to.eql(solution);
    });

    it('Se restan números complejos correctamente', () => {
        const solution = new Complex(-2, 2)
        expect(complex1.substract(complex2)).to.eql(solution);
    });

    it('Se multiplican números complejos correctamente', () => {
        const solution = new Complex(-13, 86)
        expect(complex1.multiply(complex2)).to.eql(solution);
    });

    it('Se dividen números complejos correctamente', () => {
        const solution = new Complex(0.9764705882352941, 0.3058823529411765)
        expect(complex1.divide(complex2)).to.eql(solution);
    });
});