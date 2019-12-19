require('dotenv').config();
const db = require('../Configs/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validation = require('../Helpers/validation')

module.exports = {
  loginUser: (body, params) => {
    return new Promise(async (resolve, reject) => {
      const user_type = params.user_type;
      const username = body.username;
      const password = body.password;

      // validation.checkUsername(username)

      let sql = `SELECT * FROM user WHERE username = '${username}' AND user_type= '${user_type}'`;

      db.query(sql, (err, response) => {
        if (!err) {
          if (response.length) {
            // Get password from query result
            const dbPassword = response[0].password;
            
            if (bcrypt.compareSync(password, dbPassword)) {
              console.log('Authentikasi berhasil');
              const user = { 
                name: username,
                pass: password
               };

              // Get Token
              if (user_type == 'company') {
                const accessToken = jwt.sign(
                  user,
                  process.env.ACCESS_TOKEN_COMPANY
                );
                console.log('accessToken: ', accessToken);
                response[0].token = accessToken;
              } else if (user_type == 'engineer') {
                const accessToken = jwt.sign(
                  user,
                  process.env.ACCESS_TOKEN_ENGINEER
                  //require('crypto').randomBytes(64).toString('hex')
                );
                console.log('accessToken: ', accessToken);
                response[0].token = accessToken;
              }
              resolve(response);
            } else {
              // Password Salah
              response.invalidPassword = 'Invalid Password'
              resolve(response);
              // resolve(response);
            }
          }
        } else {
          reject(err);
        }
      });
    });
  }
};
