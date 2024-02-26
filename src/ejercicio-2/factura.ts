export type Producto = [string, number];

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