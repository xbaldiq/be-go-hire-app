const db = require('../../../Configs/db');
module.exports = {
  deleteEngineerShowcase: (body,userId) => {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM showcase WHERE id=${userId} AND showcase_no=${body.showcase_no}`;
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
