const express = require('express');
const controller = require('../Controllers/engineer');
const jwtAuth = require('../Helpers/jwtAuthentication/auth');

const Router = express.Router();

Router.get('/', jwtAuth.authGetEngineer, controller.getAllEngineer);
// Router.get('/:id', authEngineer, controller.getEngineer);
Router.post('/', jwtAuth.authEngineerCRUD, controller.postEngineer);
Router.patch('/:id', jwtAuth.authEngineerCRUD, controller.patchEngineer);
Router.delete('/:id', jwtAuth.authEngineerCRUD, controller.deleteEngineer);

Router.post('/skill/:id', jwtAuth.authEngineerCRUD, controller.postEngineerSkill);
Router.patch('/skill/:id/:skill_no', jwtAuth.authEngineerCRUD, controller.patchEngineerSkill);
Router.delete('/skill/:id/:skill_no', jwtAuth.authEngineerCRUD, controller.deleteEngineerSkill);

Router.post('/showcase/:id', jwtAuth.authEngineerCRUD, controller.postEngineerShowcase);
Router.patch('/showcase/:id/:showcase_no', jwtAuth.authEngineerCRUD, controller.patchEngineerShowcase);
Router.delete('/showcase/:id/:showcase_no', jwtAuth.authEngineerCRUD, controller.deleteEngineerShowcase);

module.exports = Router;

