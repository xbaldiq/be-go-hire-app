const db = require('../../../Configs/db');
module.exports = {
  patchEngineerShowcase: (body, params) => {
    return new Promise((resolve, reject) => {
      console.log('params: ', params);
      console.log('body: ', body);
      let sql = `UPDATE showcase SET showcase_item = '${body.showcase_item}' WHERE showcase.id = ${params.id} AND showcase.showcase_no = '${params.showcase_no}'`;
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
