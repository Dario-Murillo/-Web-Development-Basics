class Cliente extends Persona{
  static contadorClientes = 0;
  constructor(nombre, apellido, edad, fecha){
    super(nombre, apellido, edad);
    this._idCliente = ++Cliente.contadorClientes;
    this._fecha = fecha;
  } 
  get idCliente(){
    return this.idCliente;
  }
  get fecha(){
    return this.fecha;
  }
  set fecha(fecha){
    this._fecha = fecha;
  }
  toString() {
    return `${super.toString()} ${this.idCliente} ${this.fecha}`;
  }
}

