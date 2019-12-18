require('dotenv').config();
const db = require('../Configs/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
  loginUser: (body, params) => {
    return new Promise(async (resolve, reject) => {
      const user_type = params.user_type;
      const username = body.username;
      const password = body.password;

      const value = [username, user_type];

      let sql = `SELECT * FROM user WHERE username = '${username}' AND user_type= '${user_type}'`;

      // db.query(sql, async (err, response) => {
      //   if (!err) {
      //     if (response.length) {
      //       try {
      //         const dbPassword = response[0].password;
      //         if (await bcrypt.compare(password, dbPassword)) {
      //           console.log('compare benar')
      //           const user = { name: username }

      //           const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
      //           //require('crypto').randomBytes(64).toString('hex')
      //           console.log(accessToken)
      //           // res.json( accessToken )

      //         } else {
      //           console.log('compare salah')
      //           // res.status(500).send()
      //         }
      //       } catch {
      //         // res.status(500).send();
      //         console.log('error bcrypt')
      //       }
      //     }
      //     resolve(response);
      //   } else {
      //     reject(err);
      //   }
      // });

      db.query(sql, (err, response) => {
        if (!err) {
          if (response.length) {
            const dbPassword = response[0].password;
            if (bcrypt.compareSync(password, dbPassword)) {
              console.log('Authentikasi berhasil');
              const user = { name: username };
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
                response[0].token = { token: accessToken };
              }
            } else {
              console.log('compare salah');
            }
            resolve(response);
          }
        } else {
          reject(err);
        }
      });
    });
  }
};
