import Cliente from './cliente.mjs';
import Impuesto from './impuesto.mjs';

// Se agregan valores al Constructor
let cliente = new Cliente('Pedro Perez');
console.log(`Cliente es: ${cliente.nombre}`);

//Se modifican los Valores Iniciales con el Get y Set
cliente.nombre = 'Javier Mesa';
console.log(`Nuevo Cliente es: ${cliente.nombre}`);

// Se agregan valores al Constructor
let impuesto = new Impuesto(100, 50);
console.log(`Monto Bruto es: ${impuesto.montobruto}, Deduccion es: ${impuesto.deduccion}`);

//Se modifican los Valores Iniciales con el Get y Set
impuesto.montobruto = 100000;
impuesto.deduccion = 50000;
console.log(`Nuevo Monto Bruto es: ${impuesto.montobruto}, Nueva Deduccion es: ${impuesto.deduccion}`);

console.log(`El impuesto del cliente ${cliente.nombre} es: 
${cliente.calcularImpuesto(impuesto.montobruto, impuesto.deduccion)}`);