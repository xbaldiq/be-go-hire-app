const db = require('../../../Configs/db');
module.exports = {
  deleteEngineerShowcase: params => {
    return new Promise((resolve, reject) => {
      console.log('params: ', params);
      let sql = `DELETE FROM showcase WHERE id=${params.id} AND showcase_no=${params.showcase_no}`;
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
