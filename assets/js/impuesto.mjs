// Clase Impuesto con su Constructor y Getters y Setters
export default class Impuesto {
    constructor(montobruto, deduccion) {
        this._montobruto = montobruto;
        this._deduccion = deduccion;
    }
    get montobruto() {
        return this._montobruto;
    }
    set montobruto(nuevo_montobruto) {
        this._montobruto = nuevo_montobruto;
    }
    get deduccion() {
        return this._deduccion;
    }
    set deduccion(nuevo_deduccion) {
        this._deduccion = nuevo_deduccion;
    }
}

// Se agregan valores al Constructor
let impuesto = new Impuesto(100, 50);
console.log(`Monto Bruto es: ${impuesto.montobruto}, Deduccion es: ${impuesto.deduccion}`);

//Se modifican los Valores Iniciales con el Get y Set
impuesto.montobruto = 100000;
impuesto.deduccion = 50000;
console.log(`Nuevo Monto Bruto es: ${impuesto.montobruto}, Nueva Deduccion es: ${impuesto.deduccion}`);