const db = require('../../../Configs/db');
module.exports = {
  postEngineerShowcase: (body, params) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO showcase (id, showcase_item) VALUES (${params.id},'${body.showcase_item}')`;

      console.log(sql);
      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
