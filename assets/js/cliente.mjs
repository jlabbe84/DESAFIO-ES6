// Clase Cliente con su Constructor y Getters y Setters
export default class Cliente {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevo_nombre) {
        this._nombre = nuevo_nombre;
    }
    calcularImpuesto(montobruto, deduccion) {
        return ((montobruto - deduccion) * 0.21);
    }
};

// Se agregan valores al Constructor
let cliente = new Cliente('Pedro Perez');
console.log(`Cliente es: ${cliente.nombre}`);

//Se modifican los Valores Iniciales con el Get y Set
cliente.nombre = 'Javier Mesa';
console.log(`Nuevo Cliente es: ${cliente.nombre}`);