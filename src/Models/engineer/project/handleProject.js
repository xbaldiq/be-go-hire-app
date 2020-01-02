const db = require('../../../Configs/db');

module.exports = {
  getEngineerProject: params => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT name_project AS project, company.name AS company, status_project AS status 
        FROM project_assignment AS PA 
        LEFT JOIN company 
        ON PA.id_company = company.id
        WHERE id_engineer=${params.id}`

        console.log(sql)
        
      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },patchEngineerStatusProject: (id, name_project, status) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE project_assignment SET status_project=? WHERE id_engineer=? AND name_project=?';
      console.log(sql)
        
      db.query(sql,[status,id,name_project],(err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }

};
