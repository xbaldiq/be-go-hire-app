const express = require('express');
const controller = require('../Controllers/company');
const jwtAuth = require('../Helpers/jwtAuthentication/auth');

const Router = express.Router();

Router.get('/', jwtAuth.authCompanyCRUD, controller.getAllCompany);
Router.get('/profile', jwtAuth.authCompanyCRUD, controller.getOneCompany);
Router.get('/project', jwtAuth.authCompanyCRUD, controller.getProject);
Router.post('/project/assign', jwtAuth.authCompanyCRUD, controller.assignProject);
Router.get('/project/assign', jwtAuth.authCompanyCRUD,controller.getAssignedProject);
Router.post('/project/create', jwtAuth.authCompanyCRUD,controller.createProject);
Router.post('/', controller.postCompany);
Router.patch('/', jwtAuth.authCompanyCRUD, controller.patchCompany);
Router.delete('/:id', jwtAuth.authCompanyCRUD, controller.deleteCompany);

module.exports = Router;

