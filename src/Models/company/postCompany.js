const db = require('../../Configs/db');

module.exports = {
  postCompany: body => {
    return new Promise((resolve, reject) => {
      let value = [body.id, body.name, body.logo, body.location, body.description];
      let sql =
        'INSERT INTO company (id,name,logo,location,description) VALUES ( ? )';
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
