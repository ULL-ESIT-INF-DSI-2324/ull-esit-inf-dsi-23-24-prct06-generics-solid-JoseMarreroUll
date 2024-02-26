import { Factura } from './factura';

export class FacturaPDF extends Factura {
  constructor(nombreEmpresa: string, numeroFactura: number, concepto: string, productos: [string, number][], fecha: string) {
    super(nombreEmpresa, numeroFactura, concepto, productos, fecha);
  }

  toPDF(): string {
    return `Factura: ${this.numeroFactura}\nEmpresa: ${this.nombreEmpresa}\nFecha: ${this.fecha}\nConcepto: ${this.concepto}\nProductos: ${this.productos.map(([nombre, precio]) => `${nombre} - ${precio}€`).join(', ')}\nPrecio total: ${this.precioTotal}€`;
  }
}