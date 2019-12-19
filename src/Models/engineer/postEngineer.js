const db = require('../../Configs/db');

module.exports = {
  postEngineer: body => {
    return new Promise((resolve, reject) => {
      const dateCreate = new Date();
      // const now = Date().toString;
      let value = [
        body.name,
        body.description,
        body.location,
        body.dateofbirth,
        dateCreate,
        body.dateupdated
      ];

      // [A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$

      let sql =
        'INSERT INTO engineer (name,description,location,dateofbirth,datecreated,dateupdated) VALUES ( ? )';
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
