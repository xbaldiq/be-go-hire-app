const express = require ('express');
const controller = require ('../Controllers/engineer');
const jwt = require('jsonwebtoken');

const Router = express.Router ();

Router.get ('/all', authCompany, controller.getAllEngineer); // localhost:8000/user/
Router.get ('/:id', authEngineer, controller.getEngineer); // localhost:8000/user/
// Router.get ('/:id', authEngineer, controller.getEngineer); // localhost:8000/user/
Router.post ('/', controller.postEngineer);
Router.patch('/:id', controller.patchEngineer)
Router.delete('/:id', controller.deleteEngineer)

Router.post ('/skill/:id', controller.postEngineerSkill);
Router.patch ('/skill/:id/:skill_no', controller.patchEngineerSkill);
Router.delete ('/skill/:id/:skill_no', controller.deleteEngineerSkill);

Router.post ('/showcase/:id', controller.postEngineerShowcase);
Router.patch ('/showcase/:id/:showcase_no', controller.patchEngineerShowcase);
Router.delete ('/showcase/:id/:showcase_no', controller.deleteEngineerShowcase);

module.exports = Router;
// Router.post ('/:id', controller.postEngineer);

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

  function authEngineer(req, res, next) {
    const authHeader = req.headers['authorization'];
    const tokenUser = authHeader && authHeader.split(' ')[1];
    if (tokenUser == null) {
      console.log('Token empty, Not authorized');
      return res.sendStatus(401);
    }
  
    jwt.verify(tokenUser, process.env.ACCESS_TOKEN_ENGINEER, (err, user) => {
      console.log(err);
      if (err) return res.sendStatus(403);
      console.log('user: ', user);
      req.user = user;
      next();
    });
  }