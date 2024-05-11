export class Tecnico {
  constructor(nombre, skills) {
    this.nombre = nombre;
    this.skills = skills;
  }

  puedeReparar(marca) {

    return this.skills?.includes(marca);
  }

  calcularReparacion(telefono) {
    let costoBase = 100;
    let costoMarca = telefono.marca === "iphone" ? 50 : 0;
    return costoBase * costoMarca;
  }
}