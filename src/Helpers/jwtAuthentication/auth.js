const jwt = require('jsonwebtoken');
const jwtdecode = require('jwt-decode');

module.exports = {
  authGetEngineer: (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const tokenUser = authHeader && authHeader.split(' ')[1];
    
    if (tokenUser == null) {
      console.log('Token empty, Not authorized');
      return res.sendStatus(401);
    }
    const decodedPayload = jwtdecode(tokenUser);
    let secretKey;

    if (decodedPayload.user_type == 'engineer') {
      secretKey = process.env.ACCESS_TOKEN_ENGINEER;
    } else if (decodedPayload.user_type == 'company') {
      secretKey = process.env.ACCESS_TOKEN_COMPANY;
    }

    jwt.verify(tokenUser, secretKey, (err, payload_user) => {
      if (err) return res.sendStatus(403);
      req.user = payload_user;
      next();
    });
  },

  authCompanyCRUD: (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const tokenUser = authHeader && authHeader.split(' ')[1];
    if (tokenUser == null) {
      console.log('Token empty, Not authorized');
      return res.sendStatus(401);
    }

    jwt.verify(tokenUser, process.env.ACCESS_TOKEN_COMPANY, (err, user) => {
      console.log(err);
      if (err) return res.sendStatus(403);
      console.log('user: ', user.id);
      req.user = user;
      next();
    });
  },
  authEngineerCRUD: (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const tokenUser = authHeader && authHeader.split(' ')[1];
    if (tokenUser == null) {
      console.log('Token empty, Not authorized');
      return res.sendStatus(401);
    }
    jwt.verify(tokenUser, process.env.ACCESS_TOKEN_ENGINEER, (err, payload) => {
      if (err) return res.sendStatus(403);
      req.user = payload;
      console.log(payload)
      next();
    });
  }
};
