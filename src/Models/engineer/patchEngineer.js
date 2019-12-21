const db = require('../../Configs/db');

module.exports = {
  patchEngineer: (body, userId) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE engineer SET ?, dateupdated=NOW() WHERE id=?';
      db.query(sql, [body, userId], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
