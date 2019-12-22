const db = require('../../Configs/db');

module.exports = {
  pagination: () => {
    return new Promise((resolve, reject) => {
      const sql = `
        SELECT count(id) as total_data 
        FROM engineer
        `;

      db.query(sql, (err, result) => {
        if (!err) {
          result[0].total_page = Math.ceil(result[0].total_data / 5)
          console.log(result)
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }
};
