const db = require('../../../Configs/db');
module.exports = {
  patchEngineerSkill: (body, userId) => {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE skill SET skill_item = '${body.skill_item}' WHERE skill.id = ${userId} AND skill.skill_no = ${body.skill_no}`;

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
