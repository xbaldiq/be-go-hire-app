const express = require('express');
const controller = require('../Controllers/company');
const jwtAuth = require('../Helpers/jwtAuthentication/auth');

const Router = express.Router();

Router.get('/', jwtAuth.authCompanyCRUD, controller.getAllCompany);
Router.get('/project', controller.getProject);
Router.post('/project/assign', controller.assignProject);
Router.post('/', controller.postCompany);
Router.patch('/:id', jwtAuth.authCompanyCRUD, controller.patchCompany);
Router.delete('/:id', jwtAuth.authCompanyCRUD, controller.deleteCompany);

module.exports = Router;

