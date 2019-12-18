const express = require('express');
const controller = require('../Controllers/company');
const jwt = require('jsonwebtoken');

const Router = express.Router();

Router.get('/', authCompany, controller.getAllCompany);
Router.post('/', authCompany, controller.postCompany);
Router.patch('/:id', authCompany, controller.patchCompany);
Router.delete('/:id', authCompany, controller.deleteCompany);
module.exports = Router;

function authCompany(req, res, next) {
  const authHeader = req.headers['authorization'];
  const tokenUser = authHeader && authHeader.split(' ')[1];
  if (tokenUser == null) {
    console.log('Token empty, Not authorized');
    return res.sendStatus(401);
  }

  jwt.verify(tokenUser, process.env.ACCESS_TOKEN_COMPANY, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    console.log('user: ', user);
    req.user = user;
    next();
  });
}