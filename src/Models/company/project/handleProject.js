const db = require('../../../Configs/db');

module.exports = {
  getProject: companyId => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM project_list where id_company=${companyId}`, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  assignProject: body => {
    return new Promise((resolve, reject) => {
        const sql = `INSERT INTO project_assignment (id_engineer, id_company, name_project) VALUES ('${body.id_engineer}', '${body.id_company}', '${body.name_project}')`;
      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  getAssignedProject: companyId => {
    return new Promise((resolve, reject) => {
        const sql = `SELECT project_assignment.no, engineer.name AS engineer, company.name AS company, project_assignment.name_project, status_project 
        FROM project_assignment 
        JOIN engineer ON project_assignment.id_engineer = engineer.id 
        JOIN company ON project_assignment.id_company = company.id 
        WHERE id_company=${companyId} ORDER BY project_assignment.no ASC`;
      db.query(sql, (err, response) => {
        console.log(sql)
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  createProject: (body,companyID) => {
    return new Promise((resolve, reject) => {
        // console.log('body', body)
        // const sql = `INSERT INTO project_assignment (id_engineer, id_company, name_project) VALUES ('${body.id_engineer}', '${body.id_company}', '${body.name_project}')`;
        const sql = `INSERT INTO project_list(id_company, project_name) VALUES (${companyID}, '${body.name_project}')`;
        
        // console.log(companyID)
        // console.log(sql)
      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },

};
// 
