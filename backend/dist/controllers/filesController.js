"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createFile = createFile;

var _File = _interopRequireDefault(require("../models/File"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//funion para crear nuevos renglones presupuestarios
function createFile(_x, _x2) {
  return _createFile.apply(this, arguments);
}

function _createFile() {
  _createFile = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, id, archivo, nombre_archivo, fase_archivo, newFile;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, id = _req$body.id, archivo = _req$body.archivo, nombre_archivo = _req$body.nombre_archivo, fase_archivo = _req$body.fase_archivo;
            _context.prev = 1;
            _context.next = 4;
            return _File["default"].create({
              code: code,
              name: name,
              description: description
            }, {
              fields: ['code', 'name', 'description']
            });

          case 4:
            newFile = _context.sent;

            if (!newFile) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Archivo Creado Exitosamente",
              data: newBudget
            }));

          case 9:
            return _context.abrupt("return", res.json({
              message: "No se Pudo Crear el Nuevo Archivo",
              data: {}
            }));

          case 10:
            _context.next = 16;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: "Error al crear nuevo File",
              data: {}
            });

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 12]]);
  }));
  return _createFile.apply(this, arguments);
}