const db = require('../../Configs/db');

module.exports = {
  patchCompany: (body, params) => {
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE company SET ? WHERE ?',
        [body, params],
        (err, response) => {
          if (!err) {
            console.log(body)
            response.changedRows > 0 ? response.msg = `Company ID: ${params.id} is updated` : response.msg = `Company ID: ${params.id} is not updated`
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  }
};
