const db = require('../../Configs/db');

module.exports = {
  patchCompany: (query, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE company SET ? WHERE ?',
        [query, params],
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
