const express = require ('express');
const homepage = require ('./homepage');
const company = require ('./company');
const engineer = require ('./engineer');
const register = require ('./register');
const login = require ('./login');

const Router = express.Router ();

Router.use ('/', homepage);
Router.use ('/company', company);
Router.use ('/engineer', engineer);
Router.use ('/register', register);
Router.use ('/login', login);
// Router.use ('/engineer', engineer);

module.exports = Router;
