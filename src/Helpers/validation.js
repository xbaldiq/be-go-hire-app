const db = require('../Configs/db');

module.exports = {
    usernameAvailable: username => {
    return new Promise((resolve, reject) => {
      let sql = `
          SELECT *
          FROM user
          WHERE username='${username}'
          `;

      db.query(sql, (err, response) => {
        if (!err) {
          if (response.length) {
            response.usernameAvailable = false;
            resolve(response);
          } else {
            response.usernameAvailable = true;
            resolve(response);
          }
        } else {
          reject(response);
        }
      });
    });
  },
//   loginFormat: (username,password => {
      
//   })
};
