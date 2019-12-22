const db = require('../../../Configs/db');
module.exports = {
  deleteEngineerShowcase: (body,userId) => {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM showcase WHERE id=${userId} AND showcase_no=${body.showcase_no}`;
      console.log(sql);

      db.query(sql, (err, response) => {
        if (!err) {
          response.msg = `Showcase User ID: ${userId} showcase_no: ${body.showcase_no} deleted`
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
