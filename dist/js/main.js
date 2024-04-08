"use strict";

var _cliente = _interopRequireDefault(require("./cliente.mjs"));

var _impuesto = _interopRequireDefault(require("./impuesto.mjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Se agregan valores al Constructor
var cliente = new _cliente["default"]('Pedro Perez');
console.log("Cliente es: ".concat(cliente.nombre)); //Se modifican los Valores Iniciales con el Get y Set

cliente.nombre = 'Javier Mesa';
console.log("Nuevo Cliente es: ".concat(cliente.nombre)); // Se agregan valores al Constructor

var impuesto = new _impuesto["default"](100, 50);
console.log("Monto Bruto es: ".concat(impuesto.montobruto, ", Deduccion es: ").concat(impuesto.deduccion)); //Se modifican los Valores Iniciales con el Get y Set

impuesto.montobruto = 100000;
impuesto.deduccion = 50000;
console.log("Nuevo Monto Bruto es: ".concat(impuesto.montobruto, ", Nueva Deduccion es: ").concat(impuesto.deduccion));
console.log("El impuesto del cliente ".concat(cliente.nombre, " es: \n").concat(cliente.calcularImpuesto(impuesto.montobruto, impuesto.deduccion)));