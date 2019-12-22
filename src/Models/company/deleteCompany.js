const db = require('../../Configs/db');

module.exports = {
  deleteCompany: params => {
    return new Promise((resolve, reject) => {
      let sql = 'DELETE FROM company WHERE ?';
      db.query(sql, [params], (err, response) => {
        if (!err) {
          response.affectedRows > 0 ? response.msg = `Company ID: ${params.id} Deleted` : response.msg = `Company ID: ${params.id} Not Deleted`
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
