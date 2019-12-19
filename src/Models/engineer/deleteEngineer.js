const db = require('../../Configs/db');

module.exports = {
  deleteEngineer: params => {
    return new Promise((resolve, reject) => {
      let sql = 'DELETE FROM engineer WHERE ?';
      let value = [params];
      db.query(sql, value, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
