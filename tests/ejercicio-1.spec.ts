import { expect } from 'chai';
import 'mocha';
import { Enser } from '../src/ejercicio-1/enser';
import { Electrodomestico } from '../src/ejercicio-1/electrodomestico';
import { Ropa } from '../src/ejercicio-1/ropa';
import { Mueble } from '../src/ejercicio-1/mueble';
import { Caja } from '../src/ejercicio-1/caja';


describe('La mudanza, gestor de enseres', () => {
  let mueble1: Mueble;
  let mueble2 :Mueble;
  let electrodomestico1: Electrodomestico;
  let electrodomestico2: Electrodomestico;
  let ropa1: Ropa;
  let ropa2: Ropa;
  let caja: Caja<Enser>;

  beforeEach(() => {
    mueble1 = new Mueble('Mesa', 10, 'Madera');
    mueble2 = new Mueble('Silla', 5, 'Madera');
    electrodomestico1 = new Electrodomestico('Lavadora', 50, 'A+++');
    electrodomestico2 = new Electrodomestico('Nevera', 100, 'A++');
    ropa1 = new Ropa('Pantalón', 0.5, 'M');
    ropa2 = new Ropa('Camiseta', 0.3, 'S');
  });

  it('Se puede añadir un mueble a la caja', () => {
    caja = new Caja([mueble1]);
    caja.addEnser(mueble2);
    expect(caja.contenido).to.eql([mueble1, mueble2]);
  });

  it('Se puede añadir un electrodomestico a la caja', () => {
    caja = new Caja([electrodomestico1]);
    caja.addEnser(electrodomestico2);
    expect(caja.contenido).to.eql([electrodomestico1, electrodomestico2]);
  });

  it('Se puede añadir ropa a la caja', () => {
    caja = new Caja([ropa1]);
    caja.addEnser(ropa2);
    expect(caja.contenido).to.eql([ropa1, ropa2]);
  });

  it('Se puede eliminar un mueble de la caja', () => {
    caja = new Caja([mueble1, mueble2]);
    caja.removeEnser(mueble2);
    expect(caja.contenido).to.eql([mueble1]);
  });

  it('Se puede eliminar un electrodomestico de la caja', () => {
    caja = new Caja([electrodomestico1, electrodomestico2]);
    caja.removeEnser(electrodomestico2);
    expect(caja.contenido).to.eql([electrodomestico1]);
  });

  it('Se puede eliminar ropa de la caja', () => {
    caja = new Caja([ropa1, ropa2]);
    caja.removeEnser(ropa2);
    expect(caja.contenido).to.eql([ropa1]);
  });

  it('Se lanza un error cuando se intenta eliminar un mueble que no está en la caja', () => {
    caja = new Caja([mueble1]);
    expect(() => caja.removeEnser(mueble2)).to.throw('El enser no se encuentra en la caja');
  });

  it('Se puede imprimir el contenido de la caja', () => {
    caja = new Caja([mueble1, mueble2, electrodomestico1, electrodomestico2, ropa1, ropa2]);
    caja.printContenido();
  });

  it('Se puede buscar un mueble en la caja', () => {
    caja = new Caja([mueble1, mueble2, electrodomestico1]);
    expect(caja.searchEnser(mueble2)).to.eql(true);
  });

  it('Se puede buscar un electrodomestico en la caja', () => {
    caja = new Caja([mueble1, mueble2, electrodomestico1]);
    expect(caja.searchEnser(electrodomestico1)).to.eql(true);
  });

  it('Se puede buscar ropa en la caja', () => {
    caja = new Caja([ropa1, ropa2, electrodomestico1]);
    expect(caja.searchEnser(ropa2)).to.eql(true);
  });

  it('Se puede buscar un mueble que no está en la caja', () => {
    caja = new Caja([mueble1, electrodomestico1]);
    expect(caja.searchEnser(mueble2)).to.eql(false);
  });

  it('Se puede buscar un electrodomestico que no está en la caja', () => {
    caja = new Caja([mueble1, mueble2]);
    expect(caja.searchEnser(electrodomestico1)).to.eql(false);
  });

  it('Se puede buscar ropa que no está en la caja', () => {
    caja = new Caja([mueble1, mueble2]);
    expect(caja.searchEnser(ropa1)).to.eql(false);
  });

  it('Se puede buscar un mueble en una caja vacía', () => {
    caja = new Caja();
    expect(caja.searchEnser(mueble1)).to.eql(false);
  });

  it('Se puede buscar un electrodomestico en una caja vacía', () => {
    caja = new Caja();
    expect(caja.searchEnser(electrodomestico1)).to.eql(false);
  });

  it('Se puede buscar ropa en una caja vacía', () => {
    caja = new Caja();
    expect(caja.searchEnser(ropa1)).to.eql(false);
  });

  it('Se puede buscar un mueble en una caja con un solo mueble', () => {
    caja = new Caja([mueble1]);
    expect(caja.searchEnser(mueble1)).to.eql(true);
  });

});