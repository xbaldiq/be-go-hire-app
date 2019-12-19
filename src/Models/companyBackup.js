const db = require('../Configs/db');
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
  postCompany: body => {
    return new Promise((resolve, reject) => {
      let value = [body.name, body.logo, body.location, body.description];
      let sql =
        'INSERT INTO company (name,logo,location,description) VALUES ( ? )';
      console.log(value);
      db.query(sql, [value], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
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
  },
  deleteCompany: params => {
    return new Promise((resolve, reject) => {
      console.log(`ID yang dihapus: ${params}`);
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
