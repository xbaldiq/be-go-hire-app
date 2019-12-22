const db = require('../../../Configs/db');
module.exports = {
  postEngineerSkill: (body, userId) => {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO skill ( id, skill_no, skill_item) VALUES (${userId},  '${body.skill_no}', '${body.skill_item}')`;
      console.log(sql);
      db.query(sql, (err, response) => {
        if (!err) {
          response.msg = `UserID ${userId} skill inserted`
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
