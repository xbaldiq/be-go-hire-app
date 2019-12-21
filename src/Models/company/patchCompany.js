const db = require('../../Configs/db');

module.exports = {
  patchCompany: (body, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE company SET ? WHERE ?',
        [body, params],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
