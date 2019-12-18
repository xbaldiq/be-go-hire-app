const express = require ('express');
const controller = require ('../Controllers/login');

const Router = express.Router ();

Router.post ('/:user_type', controller.loginUser);

module.exports = Router;
