const db = require('../../../Configs/db');
module.exports = {
  postEngineerShowcase: (body, userId) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO showcase (id, showcase_no, showcase_item) VALUES (${userId}, '${body.showcase_no}','${body.showcase_item}')`;

      console.log(sql);
      db.query(sql, (err, response) => {
        if (!err) {
          response.msg = `UserID ${userId} showcase inserted`
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
