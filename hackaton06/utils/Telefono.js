export class Telefono {
  constructor(numeroSerie, imei, marca, firma) {
    this.numeroSerie = numeroSerie;
    this.imei = imei;
    this.marca = marca;
    this.firma = firma || '';
    this.reportado = false;
    this.diagnostico = null;
    this.autorizacion = false;
    this.abono = 0;
  }
  autorizarReparacion() {
    return this.autorizacion = true;
  }
  verificarReporte() {
    return this.reportado;
  }
}