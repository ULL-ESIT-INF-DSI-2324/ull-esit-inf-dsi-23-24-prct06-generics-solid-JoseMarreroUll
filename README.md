# Práctica 6: Clases e interfaces genéricas. Principios SOLID

## Introducción
En esta práctica, se abordarán varios problemas de diseño utilizando los principios SOLID como marco de referencia y la utilización de clases e interfaces genéricas. Se analizarán casos relacionados con la gestión de mudanzas, la generación de facturas en diferentes formatos, el manejo de archivos, la implementación de impresoras y escáneres, así como el diseño de un servicio de mensajería. Los dos primeros ejercicios se enfocaran en la utilización de clases e interfaces genéricas. Y los tres últimos ejercicios se centrarán en identificar violaciones a los principios SOLID y proponer soluciones mejoradas que promuevan un código más robusto, flexible y mantenible.

## Ejercicio 1: La mudanza
Se ha diseñado una estructura que incluye una interfaz Enser y varias clases que implementan esta interfaz: Electrodomestico, Mueble y Ropa. Estas clases representan diferentes tipos de enseres que pueden ser almacenados en las cajas.

La clase principal es `Caja<T extends Enser>`, que representa una caja capaz de contener enseres. Se ha utilizado un parámetro genérico T que extiende la interfaz Enser, lo que permite la flexibilidad para contener diferentes tipos de enseres en la misma caja. La clase Caja incluye métodos para añadir, eliminar, imprimir el contenido y buscar enseres en la caja.

## Ejercicio 2: Facturas en diferentes formatos
Se han definido varias clases que representan diferentes aspectos de una factura y su representación en diferentes formatos:

1. **Clase `Factura`**: Representa una factura con nombre de empresa, número de factura, concepto, lista de productos y precio total. Proporciona un método para imprimir la factura en formato de texto plano.

2. **Clase `FacturaHTML`**: Hereda de la clase `Factura` y representa una factura en formato HTML. Proporciona un método para generar la factura en formato HTML.

3. **Clase `FacturaPDF`**: Hereda de la clase `Factura` y representa una factura en formato PDF. Proporciona un método para generar la factura en formato PDF.

4. **Clase `Sistema`**: Representa el sistema que gestiona la factura. Permite imprimir la factura, generarla en formato PDF o HTML.

### Cumplimiento del principio SOLID:
El diseño propuesto cumple con el Principio de Open/Closed (OCP). Este principio establece que una clase debe estar abierta para su extensión pero cerrada para su modificación. El diseño permite añadir nuevos formatos de generación de facturas (por ejemplo, XML, CSV) sin modificar el código existente. Las clases `FacturaHTML` y `FacturaPDF` extienden la funcionalidad de la clase base `Factura` para proporcionar nuevos formatos de salida.

## Ejercicio 3: Gestor de ficheros
### Violación del principio SOLID:
#### Principio de Responsabilidad Única (SRP):
Se está violando el principio SRP en la implementación actual. Este principio establece que una clase debe tener una única razón para cambiar. En este caso, `FileManager` tiene responsabilidades para leer y escribir archivos, lo que viola este principio. Sería más adecuado separar estas responsabilidades en clases distintas para cumplir con el SRP.

### Mejor diseño e implementación:
Para cumplir con el principio SRP y mejorar el diseño del gestor de archivos, se pueden introducir dos clases, eliminando `FileManager`, `FileWriter` y `FileReader`cuya única responsabilidad es escribir en un fichero y leer un fichero respectivamente. A continuación se presenta una propuesta de diseño alternativo:

```typescript
import * as fs from 'fs';

class FileReader {
  constructor(private filePath: string) {
  }

  // Reads file
  public readFile(): string {
	try {
  	const content: string = fs.readFileSync(this.filePath, 'utf-8');
  	return content;
	} catch (error) {
  	console.error('Error al leer el archivo:', error.message);
  	return '';
	}
  }
}

class FileWriter {
  constructor(private filePath: string) {
  }

  // Writes file
  public writeFile(data: string): void {
	try {
  	fs.writeFileSync(this.filePath, data, 'utf-8');
  	console.log('Archivo escrito exitosamente.');
	} catch (error) {
  	console.error('Error al escribir en el archivo:', error.message);
	}
  }
}

// Client code
const filePath = 'example.txt';

// Reading content
const fileReader = new FileReader(filePath);
const currentContent = fileReader.readFile();
console.log('Current content:', currentContent);

// Writing content
const fileWriter = new FileWriter(filePath);
const newData = 'This is new content to be written into the file.'
fileWriter.writeFile(newData);

// Updating content
const updatedContent = fileReader.readFile();
console.log('Updated content:', updatedContent);
```

## Ejercicio 4: Impresoras y escáneres
### Violación del principio SOLID:
#### Principio de Segregación de Interfaces (ISP):
La interfaz `PrintableScannable` viola el principio ISP, ya que obliga a las clases concretas a depender de métodos que pueden no utilizar. Esto puede llevar a una falta de cohesión y una mayor complejidad en el código.

### Propuesta de mejora:
Para corregir esta violación, se debe dividir la interfaz `PrintableScannable` en dos interfaces separadas, una para la funcionalidad de impresión y otra para la funcionalidad de escaneo. De esta manera, las clases concretas solo implementarán las interfaces que necesiten, evitando la dependencia de funcionalidades innecesarias.

```typescript
// Interfaces separadas para cada funcionalidad
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
```

## Ejercicio 5: Servicio de mensajería
### Violación del principio SOLID:
#### Principio de Inversión de Dependencias (DIP):
La clase `Notifier` debería depender de abstracciones, no de implementaciones concretas. Sin embargo, en la implementación actual, `Notifier` depende directamente de las clases concretas `EmailService` y `ShortMessageService`, lo que dificulta la extensión y la prueba de la clase.

### Propuesta de mejora:
Para cumplir con el principio DIP, se debe introducir una interfaz `NotificationService` que actúe como una abstracción para los diferentes tipos de servicios de notificación. Luego, la clase `Notifier` puede depender de esta interfaz en lugar de las implementaciones concretas, lo que facilita la extensión y la prueba de la clase.

```typescript
// Interface for notification services
interface NotificationService {
  notify(message: string): void;
}

// Class that allows notifications by email to be sent
class EmailService implements NotificationService {
  notify(message: string): void {
	console.log(`Sending notification by email: ${message}`);
  }
}

// Class that allows notifications by SMS to be sent
class ShortMessageService implements NotificationService {
  notify(message: string): void {
	console.log(`Sending notification by SMS: ${message}`);
  }
}

// Class that makes use of different types of services to perform notifications
class Notifier {
  constructor(private notificationService: NotificationService) {}

  sendNotification(message: string): void {
	this.notificationService.notify(message);
  }
}

// Client code
const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');
```

## Conclusiones:
En conclusión, la práctica ha destacado la importancia de aplicar los principios SOLID y el uso de clases e interfaces genéricas en el diseño de software. A través de la identificación y corrección de violaciones a estos principios, se ha demostrado cómo se puede promover un código más robusto, flexible y mantenible. Estas prácticas son fundamentales para mejorar la calidad del software y facilitar su mantenimiento y evolución a lo largo del tiempo.
