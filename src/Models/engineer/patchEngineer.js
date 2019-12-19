const db = require('../../Configs/db');

module.exports = {
  patchEngineer: (query, params) => {
    return new Promise((resolve, reject) => {
      // console.log(`query= ${query}, params= ${params}`)
      console.log('query = ', query);
      console.log('params = ', params);
      const sql = 'UPDATE engineer SET ?, dateupdated=NOW() WHERE ?';
      db.query(sql, [query, params], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
