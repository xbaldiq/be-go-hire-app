const db = require('../../../Configs/db');
module.exports = {
  postEngineerSkill: (body, userId) => {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO skill ( id, skill_no, skill_item) VALUES (${userId},  '${body.skill_no}', '${body.skill_item}')`;
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
