"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _BudgetLineAtlas = _interopRequireDefault(require("./BudgetLineAtlas"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var File = _database.sequelize.define('files', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  filename: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  filedir: {
    type: _sequelize["default"].STRING
  },
  fase: {
    type: _sequelize["default"].STRING
  },
  budgetlineatlas_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: true,
    references: {
      model: _BudgetLineAtlas["default"],
      key: 'id'
    }
  },
  createdAt: {
    type: _sequelize["default"].DATE,
    defaultValue: _sequelize["default"].NOW
  },
  updatedAt: {
    type: _sequelize["default"].DATE,
    defaultValue: _sequelize["default"].NOW
  }
}, {
  timestamps: true
});

var _default = File;
exports["default"] = _default;