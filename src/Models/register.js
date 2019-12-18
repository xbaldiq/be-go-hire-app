const db = require('../Configs/db');
const bcrypt = require('bcryptjs');

module.exports = {
  registerUser: (body, params) => {
    try {
      return new Promise( async (resolve, reject) => {
        const user_type = params.user_type;
        const username = body.username;
        const password = body.password;

        const hashedPassword = await bcrypt.hash(password, 10);

        let value = [user_type, username, hashedPassword];
        let sql =
          'INSERT INTO user (user_type, username, password) VALUES ( ? )';

        db.query(sql, [value], (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        });
      });
    } catch { 
        // res.status(500).send()
        console.log('error bcrypt')
    }
  }
};
