const db = require('../../../Configs/db');
module.exports = {
  deleteEngineerSkill: params => {
    return new Promise((resolve, reject) => {
      console.log('params: ', params);
      let sql = `DELETE FROM skill WHERE id=${params.id} AND skill_no=${params.skill_no}`;
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
