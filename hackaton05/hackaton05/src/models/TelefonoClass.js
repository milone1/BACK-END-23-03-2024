export class Telefono {
  constructor(numeroSerie, imei, marca) {
    this.numeroSerie = numeroSerie;
    this.imei = imei;
    this.marca = marca;
    this.reportado = false;
    this.diagnostico = null;
    this.autorizacion = false;
    this.abono = 0;
  }
  verificarReporte() {
    return this.reportado;
  }
}