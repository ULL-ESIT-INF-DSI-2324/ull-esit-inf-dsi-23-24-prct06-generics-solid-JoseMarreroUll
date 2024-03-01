/**
 * La interfaz PrintableScannable define dos funcionalidades que no son siempre utilizadas juntas. Las clases Printer y Scanner solo implementan una de las funcionalidades, pero se ven obligadas a implementar la otra aunque no la utilicen.
 */

// Interfaces
interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

// Clases concretas
class Printer implements Printable {
  print(): void {
    console.log('Printing...');
  }
}

class Scanner implements Scannable {
  scan(): void {
    console.log('Scanning...');
  }
}

// Cliente
const printer = new Printer();
printer.print();

const scanner = new Scanner();
scanner.scan();
