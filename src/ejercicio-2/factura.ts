export type Producto = [string, number];

/**
 * Clase que representa una factura.
 * @param _nombreEmpresa Nombre de la empresa.
 * @param _numeroFactura Número de la factura.
 * @param _concepto Concepto de la factura.
 * @param _productos Productos de la factura.
 * @param _precioTotal Precio total de la factura.
 * @param _fecha Fecha de la factura.
 * @method print Imprime la factura.
 * @returns Factura impresa.
 * @example
 * ```ts
 * const factura = new Factura('Empresa', 1, 'Concepto', [['Producto', 10]], '01/01/2021');
 * console.log(factura.print());
 * ```
 */
export class Factura {
  private _nombreEmpresa: string;
  private _numeroFactura :number;
  private _concepto :string;
  private _productos: Producto[];
  private _precioTotal: number;
  private _fecha: string;

  constructor(nombreEmpresa: string, numeroFactura: number, concepto: string, productos: Producto[], fecha: string) {
    this._nombreEmpresa = nombreEmpresa;
    this._numeroFactura = numeroFactura;
    this._concepto = concepto;
    this._productos = productos;
    this._fecha = fecha;
    this._precioTotal = this._productos.reduce((acc, [_, precio]) => acc + precio, 0);
  }

  get nombreEmpresa(): string {
    return this._nombreEmpresa;
  }

  get numeroFactura(): number {
    return this._numeroFactura;
  }

  get concepto(): string {
    return this._concepto;
  }

  get productos(): Producto[] {
    return this._productos;
  }

  get precioTotal(): number {
    return this._precioTotal;
  }

  get fecha(): string {
    return this._fecha;
  }

  print(): string {
    return `Factura de ${this.nombreEmpresa}\nNúmero de factura: ${this.numeroFactura}\nConcepto: ${this.concepto}\nProductos:\n${this.productos.map(([nombre, precio]) => `- ${nombre}: ${precio}€`).join('\n')}\nPrecio total: ${this.precioTotal}€\nFecha: ${this.fecha}`;
  }
}