const db = require('../../../Configs/db');
module.exports = {
  postEngineerSkill: (body, params) => {
    return new Promise((resolve, reject) => {
      console.log('params: ', params.id);
      console.log('body: ', body.skill);
      let sql = `INSERT INTO skill ( id, skill_item) VALUES (${params.id},'${body.skill}')`;
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
