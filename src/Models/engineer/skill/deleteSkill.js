const db = require('../../../Configs/db');
module.exports = {
  deleteEngineerSkill: (body,userId) => {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM skill WHERE id=${userId} AND skill_no=${body.skill_no}`;
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
