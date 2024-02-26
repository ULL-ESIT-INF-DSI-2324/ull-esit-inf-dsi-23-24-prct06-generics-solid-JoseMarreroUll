import { Factura } from './factura';

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