const express = require ('express');
const controller = require ('../Controllers/company');

const Router = express.Router ();

Router.get ('/', controller.getAllCompany); // localhost:8000/user/
Router.post ('/', controller.postCompany);
Router.patch('/:id', controller.patchCompany)
Router.delete('/:id', controller.deleteCompany)
module.exports = Router;
