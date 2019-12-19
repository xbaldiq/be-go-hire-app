const db = require('../../../Configs/db');
module.exports = {
  patchEngineerSkill: (body, params) => {
    return new Promise((resolve, reject) => {
      console.log('params: ', params);
      console.log('body: ', body.skill);
      let sql = `UPDATE skill SET skill_item = '${body.skill}' WHERE skill.id = ${params.id} AND skill.skill_no = ${params.skill_no}`;
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
