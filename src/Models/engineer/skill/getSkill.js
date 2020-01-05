const db = require('../../../Configs/db');
module.exports = {
  getEngineerSkill: (userId) => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM skill WHERE id=${userId} ORDER BY skill.skill_no ASC`;
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
