const db = require('../../Configs/db');

module.exports = {
  getProject: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM project_list', (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  assignProject: body => {
    //   console.log(body)
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO project_assignment (id_engineer, id_company, project_item) VALUES ('${body.id_engineer}', '${body.id_company}', '${body.project_item}')`;
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
