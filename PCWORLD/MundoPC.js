class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }
  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones; 
  }
  get idRaton() {
    return this._idRaton;
  }

  toString() {
    return `Raton: [RatonID: ${this._idRaton}], [Tipo de Entrada: ${this.tipoEntrada}], [Marca: ${this._marca}]`;
  }
}

class Teclado extends DispositivoEntrada {
  static contadorTeclados = 0;
  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclados; 
  }
  get idTeclado() {
    return this._idTeclado;
  }

  toString() {
    return `Teclado: [TecladoID: ${this._idTeclado}], [Tipo de Entada: ${this.tipoEntrada}], [Marca: ${this._marca}]`;
  }
}

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamano) {
    this._marca = marca;
    this._tamano = tamano;
    this._idMonitor = ++Monitor.contadorMonitores;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get tamano() {
    return this._tamano;
  }

  set tamano(tamano) {
    this._tamano = tamano;
  }

  get idMonitor() {
    return this._idMonitor;
  }

  toString() {
    return `Monitor: [MonitorId: ${this.idMonitor}], [Tamano: ${this.tamano}],  [Marca: ${this.marca}]`;
  }
}

class Computadora {
  static contadorComputadoras = 0;

  constructor(nombre, raton, teclado, monitor) {
    this._nombre = nombre;
    this._raton = raton;
    this._teclado = teclado;
    this._monitor = monitor;
    this._idComputadora = ++Computadora.contadorComputadoras;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get raton() {
    return this._raton;
  }

  set raton(raton) {
    this._raton = raton;
  }

  get teclado() {
    return this._teclado;
  }

  set teclado(teclado) {
    this._teclado = teclado;
  }

  get monitor() {
    return this._monitor;
  }

  set monitor(monitor) {
    this._monitor = monitor;
  }

  get idComputadora() {
    return this._idComputadora;
  }

  toString() {
    return `Computadora: [Nombre: ${this.nombre}], [ComputadoraID: ${this.idComputadora}] \n [${this.raton}] \n [${this.teclado}] \n [${this.monitor}]`;
  }
}


class Orden {
  static contadorOrdenes = 0;
  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this.computadoras = [];
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarComputadora(computadora) {
    this.computadoras.push(computadora);
  }

  mostrarOrden() {
    let auxString = '';
    for (let index = 0; index < this.computadoras.length; index++) {
      auxString += ` \n ${this.computadoras[index]}`;
    }
    return (`Orden ${this.idOrden} \n Computadoras: ${auxString}`);
  }  
}

let raton = new Raton("Bluetooth", "Logitech");
console.log(raton.toString());

let teclado = new Teclado("Analogico", "Razer");
console.log(teclado.toString());

let monitor = new Monitor("Asus", "14 inches");
console.log(monitor.toString());

let computadora1 = new Computadora("A23", raton, teclado, monitor);
console.log(computadora1.toString());

let raton1 = new Raton("Analogico", "Steel Series");
let teclado1 = new Teclado("Bluetooth", "Rogue");
let monitor1 = new Monitor("Sony", "16 inches");
let computadora2 = new Computadora("Thinkpad", raton1, teclado1, monitor1);

let orden = new Orden();
orden.agregarComputadora(computadora1);
orden.agregarComputadora(computadora2);
console.log(orden.mostrarOrden());
 

