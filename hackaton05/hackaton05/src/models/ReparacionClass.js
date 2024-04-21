export class Reparacion {
  constructor(telefono, tecnico, repuesto) {
    this.telefono = telefono;
    this.tecnico = tecnico;
    this.repuesto = repuesto;
    this.estado = "En espera de autorizacion";
  }

  autorizarReparacion() {
    if (
      this.telefono.autorizacion &&
      this.telefono.abono === this.calcularAbonoInicial()
    ) {
      this.estado = "En Reparacion";
    } else {
      console.log("La autorizacion y/o abono son diferentes. ");
    }
  }

  calcularAbonoInicial() {
    return 0.5 * this.tecnico.calcularReparacion(this.telefono);
  }
}