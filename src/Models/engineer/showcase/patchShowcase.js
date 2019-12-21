const db = require('../../../Configs/db');
module.exports = {
  patchEngineerShowcase: (body, userId) => {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE showcase SET showcase_item = '${body.showcase_item}' WHERE showcase.id = ${userId} AND showcase.showcase_no = '${body.showcase_no}'`;
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
