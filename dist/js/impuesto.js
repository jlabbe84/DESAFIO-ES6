"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Clase Impuesto con su Constructor y Getters y Setters
var Impuesto = /*#__PURE__*/function () {
  function Impuesto(montobruto, deduccion) {
    _classCallCheck(this, Impuesto);

    this._montobruto = montobruto;
    this._deduccion = deduccion;
  }

  _createClass(Impuesto, [{
    key: "montobruto",
    get: function get() {
      return this._montobruto;
    },
    set: function set(nuevo_montobruto) {
      this._montobruto = nuevo_montobruto;
    }
  }, {
    key: "deduccion",
    get: function get() {
      return this._deduccion;
    },
    set: function set(nuevo_deduccion) {
      this._deduccion = nuevo_deduccion;
    }
  }]);

  return Impuesto;
}(); // Se agregan valores al Constructor


exports["default"] = Impuesto;
var impuesto = new Impuesto(100, 50);
console.log("Monto Bruto es: ".concat(impuesto.montobruto, ", Deduccion es: ").concat(impuesto.deduccion)); //Se modifican los Valores Iniciales con el Get y Set

impuesto.montobruto = 100000;
impuesto.deduccion = 50000;
console.log("Nuevo Monto Bruto es: ".concat(impuesto.montobruto, ", Nueva Deduccion es: ").concat(impuesto.deduccion));