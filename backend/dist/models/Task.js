"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//para modelar datos 
//import connection object
var Task = _database.sequelize.define('tasks', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  code: {
    type: _sequelize["default"].STRING(50)
  },
  name: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  description: {
    type: _sequelize["default"].TEXT
  },
  status: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  priority: {
    type: _sequelize["default"].STRING,
    allowNull: false
  },
  startdate: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false
  },
  complete: {
    type: _sequelize["default"].INTEGER,
    allowNull: false
  },
  duration: {
    type: _sequelize["default"].INTEGER,
    allowNull: false
  },
  category_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  },
  project_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: Project,
      key: 'id'
    }
  },
  account_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: Account,
      key: 'id'
    }
  },
  dollar_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: Dollar,
      key: 'id'
    }
  },
  team_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: Team,
      key: 'id'
    }
  },
  file_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: File,
      key: 'id'
    }
  },
  responsable_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: Person,
      key: 'id'
    }
  },
  approvalby_id: {
    type: _sequelize["default"].INTEGER,
    allowNull: false,
    references: {
      model: Person,
      key: 'id'
    }
  },
  approval: {
    type: _sequelize["default"].BOOLEAN,
    allowNull: false
  },
  dateapproval: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false
  },
  notes: {
    type: _sequelize["default"].TEXT
  },
  color: {
    type: _sequelize["default"].STRING,
    allowNull: false
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

var _default = Task;
exports["default"] = _default;