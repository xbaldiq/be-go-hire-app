const express = require ('express');
const controller = require ('../Controllers/engineer');

const Router = express.Router ();

Router.get ('/', controller.getAllEngineer); // localhost:8000/user/
Router.post ('/', controller.postEngineer);
Router.patch('/:id', controller.patchEngineer)
Router.delete('/:id', controller.deleteEngineer)
module.exports = Router;
