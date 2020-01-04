const express = require('express');
const controller = require('../Controllers/engineer');
const jwtAuth = require('../Helpers/jwtAuthentication/auth');

const Router = express.Router();

Router.get('/', jwtAuth.authGetEngineer, controller.getAllEngineer);
Router.get('/id/:id', jwtAuth.authCompanyCRUD ,controller.getEngineer);
Router.post('/', controller.postEngineer);
Router.patch('/', jwtAuth.authEngineerCRUD, controller.patchEngineer);
Router.delete('/:id', controller.deleteEngineer);

Router.get('/skill', jwtAuth.authEngineerCRUD,controller.getEngineerSkill);
Router.post('/skill', jwtAuth.authEngineerCRUD,controller.postEngineerSkill);
Router.patch('/skill', jwtAuth.authEngineerCRUD, controller.patchEngineerSkill);
Router.delete('/skill/:id', jwtAuth.authEngineerCRUD, controller.deleteEngineerSkill);

Router.post('/showcase', jwtAuth.authEngineerCRUD, controller.postEngineerShowcase);
Router.patch('/showcase', jwtAuth.authEngineerCRUD, controller.patchEngineerShowcase);
Router.delete('/showcase/:id', jwtAuth.authEngineerCRUD, controller.deleteEngineerShowcase);

// Project
Router.get('/project', controller.getEngineerProject);
Router.patch('/project', controller.patchEngineerStatusProject);

module.exports = Router;
  