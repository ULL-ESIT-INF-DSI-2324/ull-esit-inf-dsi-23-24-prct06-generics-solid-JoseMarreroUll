import { Factura } from './factura';

/**
 * Clase que representa una factura en formato HTML.
 * @param nombreEmpresa Nombre de la empresa.
 * @param numeroFactura Número de la factura.
 * @param concepto Concepto de la factura.
 * @param productos Productos de la factura.
 * @param fecha Fecha de la factura.
 * @method toHTML Devuelve la factura en formato HTML.
 * @returns Factura en formato HTML.
 * @example
 * ```ts
 * const factura = new FacturaHTML('Empresa', 1, 'Concepto', [['Producto', 10]], '01/01/2021');
 * console.log(factura.toHTML());
 * ```
 */
export class FacturaHTML extends Factura {
  constructor(nombreEmpresa: string, numeroFactura: number, concepto: string, productos: [string, number][], fecha: string) {
    super(nombreEmpresa, numeroFactura, concepto, productos, fecha);
  }

  toHTML(): string {
    return `
    <html>
      <head>
        <title>Factura</title>
      </head>
      <body>
        <h1>Factura de ${this.nombreEmpresa}</h1>
        <p>Número de factura: ${this.numeroFactura}</p>
        <p>Concepto: ${this.concepto}</p>
        <h2>Productos:</h2>
        <ul>
          ${this.productos.map(([nombre, precio]) => `<li>${nombre}: ${precio}€</li>`).join('')}
        </ul>
        <p>Precio total: ${this.precioTotal}€</p>
        <p>Fecha: ${this.fecha}</p>
      </body>
    </html>
    `;
  }
}