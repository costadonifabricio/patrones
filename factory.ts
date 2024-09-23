interface Equipo {
  detalles(): string;
}

class Notebook implements Equipo {
  private nombre: string;
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }

  public detalles(): string {
    return `Tipo: Notebook, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Desktop implements Equipo {
  private nombre: string;
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }

  public detalles(): string {
    return `Tipo: Desktop, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class Servidor implements Equipo {
  private nombre: string;
  private ram: string;
  private procesador: string;

  constructor(nombre: string, ram: string, procesador: string) {
    this.nombre = nombre;
    this.ram = ram;
    this.procesador = procesador;
  }

  public detalles(): string {
    return `Tipo: Servidor, Nombre: ${this.nombre}, RAM: ${this.ram}, Procesador: ${this.procesador}`;
  }
}

class EquipoFactory {
  public crearEquipo(
    tipo: string,
    nombre: string,
    ram: string,
    procesador: string
  ): Equipo {
    if (tipo === "Notebook") {
      return new Notebook(nombre, ram, procesador);
    } else if (tipo === "Desktop") {
      return new Desktop(nombre, ram, procesador);
    } else if (tipo === "Servidor") {
      return new Servidor(nombre, ram, procesador);
    }
    throw new Error("Tipo de equipo no reconocido");
  }
}

const factory = new EquipoFactory();
const equipo1 = factory.crearEquipo("Notebook", "Dell XPS", "16GB", "i7");
const equipo2 = factory.crearEquipo(
  "Desktop",
  "HP Pavilion",
  "32GB",
  "Ryzen 7"
);
const equipo3 = factory.crearEquipo(
  "Servidor",
  "IBM Power",
  "128GB",
  "Xeon E7"
);

console.log(equipo1.detalles());
console.log(equipo2.detalles());
console.log(equipo3.detalles());
