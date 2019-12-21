const db = require('../../Configs/db');

module.exports = {
  deleteCompany: params => {
    return new Promise((resolve, reject) => {
      let sql = 'DELETE FROM company WHERE ?';
      db.query(sql, [params], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
