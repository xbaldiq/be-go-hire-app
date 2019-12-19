const db = require('../../Configs/db');

module.exports = {
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
  }
};
