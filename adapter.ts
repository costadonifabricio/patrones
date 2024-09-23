class InventarioViejo {
  private items: { nombre: string; tipo: string; estado: string }[] = [];

  public agregarItem(nombre: string, tipo: string, estado: string): void {
    this.items.push({ nombre, tipo, estado });
  }

  public obtenerItems(): { nombre: string; tipo: string; estado: string }[] {
    return this.items;
  }
}

interface InventarioNuevo {
  agregarEquipo(nombre: string, tipo: string, estado: string): void;
  listarEquipos(): { nombre: string; tipo: string; estado: string }[];
}

class AdaptadorInventario implements InventarioNuevo {
  private inventarioViejo: InventarioViejo;

  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
  }

  public agregarEquipo(nombre: string, tipo: string, estado: string): void {
    this.inventarioViejo.agregarItem(nombre, tipo, estado);
  }

  public listarEquipos(): { nombre: string; tipo: string; estado: string }[] {
    return this.inventarioViejo.obtenerItems();
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Servidor Dell", "Servidor", "disponible");
console.log(adaptador.listarEquipos());

