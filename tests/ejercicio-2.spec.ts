import { expect } from 'chai';
import 'mocha';
import { Factura, Producto } from '../src/ejercicio-2/factura';
import { Sistema } from '../src/ejercicio-2/sistema';


describe('La mudanza, gestor de enseres', () => {
  let factura: Factura;
  let sistema: Sistema;
  const productos: Producto[] = [['Silla', 35], ['Mesa', 50], ['Sofá', 100], ['Lámpara', 20]];

  beforeEach(() => {
    factura = new Factura('Empresa', 1, 'Concepto', productos, '01/01/2021');
    sistema = new Sistema(factura);
  });

  it('Se puede imprimir la factura', () => {
    expect(sistema.imprimirFactura()).to.eql('Factura de Empresa\nNúmero de factura: 1\nConcepto: Concepto\nProductos:\n' +
    '- Silla: 35€\n- Mesa: 50€\n- Sofá: 100€\n- Lámpara: 20€\nPrecio total: 205€\nFecha: 01/01/2021');
  });

  it('Se puede imprimir la factura en PDF', () => {
    expect(sistema.facturaEnPDF()).to.eql('Factura: 1\nEmpresa: Empresa\nFecha: 01/01/2021\nConcepto: Concepto\nProductos: Silla - 35€, Mesa - 50€, Sofá - 100€, Lámpara - 20€' +
    '\nPrecio total: 205€');
  });
  
  it('Se puede imprimir la factura en HTML', () => {
    expect(sistema.facturaEnHTML()).to.eql(`
    <html>
      <head>
        <title>Factura</title>
      </head>
      <body>
        <h1>Factura de Empresa</h1>
        <p>Número de factura: 1</p>
        <p>Concepto: Concepto</p>
        <h2>Productos:</h2>
        <ul>
          <li>Silla: 35€</li><li>Mesa: 50€</li><li>Sofá: 100€</li><li>Lámpara: 20€</li>
        </ul>
        <p>Precio total: 205€</p>
        <p>Fecha: 01/01/2021</p>
      </body>
    </html>
    `);
  });

  it('Se puede obtener la factura', () => {
    expect(sistema.factura).to.eql(factura);
  });

  it('Se puede obtener el precio total de la factura', () => {
    expect(sistema.factura.precioTotal).to.eql(205);
  });

  it('Se puede obtener el número de factura', () => {
    expect(sistema.factura.numeroFactura).to.eql(1);
  });

  it('Se puede obtener el concepto de la factura', () => {
    expect(sistema.factura.concepto).to.eql('Concepto');
  });

  it('Se puede obtener la fecha de la factura', () => {
    expect(sistema.factura.fecha).to.eql('01/01/2021');
  });

  it('Se puede obtener la empresa de la factura', () => {
    expect(sistema.factura.nombreEmpresa).to.eql('Empresa');
  });

  it('Se puede obtener los productos de la factura', () => {
    expect(sistema.factura.productos).to.eql(productos);
  });

  it('Se puede obtener el precio de un producto de la factura', () => {
    expect(sistema.factura.productos[0][1]).to.eql(35);
  });
});