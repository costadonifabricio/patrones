interface Observador {
    actualizar(nombreEquipo: string, nuevoEstado: string): void;
}

class Soporte implements Observador {
    actualizar(nombreEquipo: string, nuevoEstado: string): void {
        console.log(`Soporte notificado: ${nombreEquipo} ha cambiado su estado a ${nuevoEstado}.`);
    }
}

class Equipos {
    private observadores: Observador[] = [];
    private estado: string;

    constructor(private nombre: string, private tipo: string, estado: string) {
        this.estado = estado;
    }

    agregarObservador(observador: Observador): void {
        this.observadores.push(observador);
    }

    eliminarObservador(observador: Observador): void {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    cambiarEstado(nuevoEstado: string): void {
        this.estado = nuevoEstado;
        this.notificarObservadores();
    }

    private notificarObservadores(): void {
        this.observadores.forEach(obs => obs.actualizar(this.nombre, this.estado));
    }
}

const soporte = new Soporte();
const equipo = new Equipos("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);

equipo.cambiarEstado("en reparación");

