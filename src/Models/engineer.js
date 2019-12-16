const db = require('../Configs/db');
module.exports = {
  getAllEngineer: () => {
    return new Promise((resolve, reject) => {
      let sql = `
        SELECT 
            engineer.id, 
            engineer.name, 
            GROUP_CONCAT(DISTINCT skill.skill_item SEPARATOR ', ') AS skills, 
            GROUP_CONCAT(DISTINCT showcase.showcase_item SEPARATOR ', ') AS showcase
        FROM engineer
        INNER JOIN skill
            ON engineer.id = skill.id
        INNER JOIN showcase
            ON engineer.id = showcase.id
        GROUP BY engineer.id
        `;

      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  postEngineer: body => {
    return new Promise((resolve, reject) => {
      let value = [
        body.name,
        body.description,
        body.location,
        body.dateofbirth,
        body.datecreated,
        body.dateupdated
      ];
      let sql =
        'INSERT INTO engineer (name,description,location,dateofbirth,datecreated,dateupdated) VALUES ( ? )';
      console.log(value);
      db.query(sql, [value], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  patchEngineer: (query, params) => {
    return new Promise((resolve, reject) => {
      // console.log(`query= ${query}, params= ${params}`)
      console.log(query, params);
      db.query(
        'UPDATE engineer SET ? WHERE ?',
        [query, params],
        (err, response) => {
          if (!err) {
            resolve(response);
          } else {
            reject(err);
          }
        }
      );
    });
  },
  deleteEngineer: params => {
    return new Promise((resolve, reject) => {
      console.log(`Engineer yang dihapus: ${params}`);
      let sql = 'DELETE FROM engineer WHERE ?';
      db.query(sql, [params], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};
