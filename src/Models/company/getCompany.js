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
  },
  getOneCompany: (companyID) => {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM company where id=${companyID}`
      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response[0]);
        } else {
          reject(err);
        }
      });
    });
  }
};