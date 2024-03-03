import { Factura } from './factura';
import { FacturaPDF } from './facturapdf';
import { FacturaHTML } from './facturahtml';

/**
 * Clase que representa un sistema.
 * @param _factura Factura del sistema.
 * @method imprimirFactura Imprime la factura.
 * @returns Factura impresa.
 * @method facturaEnPDF Devuelve la factura en formato PDF.
 * @returns Factura en formato PDF.
 * @method facturaEnHTML Devuelve la factura en formato HTML.
 * @returns Factura en formato HTML.
 * @example
 * ```ts
 * const factura = new Factura('Empresa', 1, 'Concepto', [['Producto', 10]], '01/01/2021');
 * const sistema = new Sistema(factura);
 * console.log(sistema.imprimirFactura());
 * console.log(sistema.facturaEnPDF());
 * console.log(sistema.facturaEnHTML());
 * ```
 */
export class Sistema {
  private _factura: Factura;

  constructor(factura: Factura) {
    this._factura = factura;
  }

  get factura(): Factura {
    return this._factura;
  }

  imprimirFactura(): string {
    console.log(this.factura.print());
    return this.factura.print();
  }

  facturaEnPDF(): string {
    const facturaPDF = new FacturaPDF(this.factura.nombreEmpresa, this.factura.numeroFactura, this.factura.concepto, this.factura.productos, this.factura.fecha);
    console.log(facturaPDF.toPDF());
    return facturaPDF.toPDF();
  }

  facturaEnHTML(): string {
    const facturaPDF = new FacturaHTML(this.factura.nombreEmpresa, this.factura.numeroFactura, this.factura.concepto, this.factura.productos, this.factura.fecha);
    console.log(facturaPDF.toHTML());
    return facturaPDF.toHTML();
  }
}