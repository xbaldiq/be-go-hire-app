const express = require ('express');
const controller = require ('../Controllers/register');

const Router = express.Router ();

Router.post ('/:user_type', controller.registerUser);

module.exports = Router;
