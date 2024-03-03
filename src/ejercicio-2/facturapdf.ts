import { Factura } from './factura';

/**
 * Clase que representa una factura en formato PDF.
 * @param nombreEmpresa Nombre de la empresa.
 * @param numeroFactura Número de la factura.
 * @param concepto Concepto de la factura.
 * @param productos Productos de la factura.
 * @param fecha Fecha de la factura.
 * @method toPDF Devuelve la factura en formato PDF.
 * @returns Factura en formato PDF.
 * @example
 * ```ts
 * const factura = new FacturaPDF('Empresa', 1, 'Concepto', [['Producto', 10]], '01/01/2021');
 * console.log(factura.toPDF());
 * ```
 */
export class FacturaPDF extends Factura {
  constructor(nombreEmpresa: string, numeroFactura: number, concepto: string, productos: [string, number][], fecha: string) {
    super(nombreEmpresa, numeroFactura, concepto, productos, fecha);
  }

  toPDF(): string {
    return `Factura: ${this.numeroFactura}\nEmpresa: ${this.nombreEmpresa}\nFecha: ${this.fecha}\nConcepto: ${this.concepto}\nProductos: ${this.productos.map(([nombre, precio]) => `${nombre} - ${precio}€`).join(', ')}\nPrecio total: ${this.precioTotal}€`;
  }
}