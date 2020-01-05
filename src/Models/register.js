const db = require('../Configs/db');
const bcrypt = require('bcryptjs');
const validation = require('../Helpers/validation');

module.exports = {
  registerUser: ({ username, password }, { user_type }) => {
    try {
      return new Promise(async (resolve, reject) => {
        // VALIDATION
        let resultUsername = /^[a-z0-9]{3,15}$/.test(username);
        let resultPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\W]{5,}$/.test(
          password
        );
        if (resultUsername == false || resultPassword == false) {
          resolve((msg = 'registerInvalidFormat'));
        }

        const checkUser = await validation
          .usernameAvailable(username)
          .then(response => {
            if (response.usernameAvailable == true) {
              return 'true';
            } else {
              return 'false';
            }
          })
          .catch(err => {
            console.log(err);
          });
        if (checkUser == 'false') {
          const response = 403;
          resolve(response);
        } else {
          // END OF VALIDATION

          // Hashing password
          const hashedPassword = bcrypt.hashSync(password, 10);
          let value = [user_type, username, hashedPassword];
          let sql =
            'INSERT INTO user (user_type, username, password) VALUES ( ? )';

          // Execute msql
          db.query(sql, [value], (err, response) => {
            if (!err) {
              resolve(response);
            } else {
              reject(err);
            }
          });
        }
      });
    } catch {
      console.log('error bcrypt');
    }
  }
};
