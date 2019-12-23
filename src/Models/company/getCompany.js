const db = require('../../Configs/db');

module.exports = {
  getAllCompany: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM company', (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};