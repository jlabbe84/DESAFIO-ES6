"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Clase Cliente con su Constructor y Getters y Setters
var Cliente = /*#__PURE__*/function () {
  function Cliente(nombre) {
    _classCallCheck(this, Cliente);

    this._nombre = nombre;
  }

  _createClass(Cliente, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto(montobruto, deduccion) {
      return (montobruto - deduccion) * 0.21;
    }
  }]);

  return Cliente;
}();

exports["default"] = Cliente;
; // Se agregan valores al Constructor

var cliente = new Cliente('Pedro Perez');
console.log("Cliente es: ".concat(cliente.nombre)); //Se modifican los Valores Iniciales con el Get y Set

cliente.nombre = 'Javier Mesa';
console.log("Nuevo Cliente es: ".concat(cliente.nombre));