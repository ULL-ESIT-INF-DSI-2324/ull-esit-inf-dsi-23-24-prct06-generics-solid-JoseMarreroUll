import { Factura } from './factura';
import { FacturaPDF } from './facturapdf';
import { FacturaHTML } from './facturahtml';

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