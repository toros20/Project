"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _filesController = require("../controllers/filesController");

var router = (0, _express.Router)();
//ruta para la creacion de un nuevo archivo, asignado a un budgetLiine Atlas
router.post('/:id', _filesController.createFile);
/* router.get('/categories_parents',categoriesparents);
router.get('/categories_childs/:id',categories_childs);// para obtener todas las categorias hijas dado el id del padre
router.get('/child/:id',childbyid); // para solicitar una clasificacion hijo en especifico
 */

var _default = router;
exports["default"] = _default;