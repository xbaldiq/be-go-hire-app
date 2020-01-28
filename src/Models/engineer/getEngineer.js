const db = require('../../Configs/db');

module.exports = {
  getAllEngineer: (params, query) => {
    let filterKey = 1;
    let filterVal = '';

    const sort = query.sort || 'id';
    const order = query.order || 'asc';
    const limit = query.limit || 5;
    const page = query.page || 1;

    let offset = limit * page - limit;

    // Set Query filter
    let queryString = '';
    if (query['name'] && query['skill']) {
      queryString = `WHERE engineer.name LIKE '%${query.name}%' AND skill.skill_item LIKE '%${query.skill}%'`;
    } else if (query['name']) {
      queryString = `WHERE engineer.name LIKE '%${query.name}%'`;
    } else if (query['skill']) {
      queryString = `WHERE skill.skill_item LIKE '%${query.skill}%'`;
    }

    return new Promise((resolve, reject) => {
      let newSql = ` 
          SELECT
          engineer.id,
          engineer.name,
          engineer.description,
          engineer.about,
          engineer.location,
          engineer.dateofbirth,
          engineer.datecreated,
          engineer.dateupdated,
          GROUP_CONCAT(DISTINCT skill.skill_item SEPARATOR ', ') AS skill,
          GROUP_CONCAT(DISTINCT showcase.showcase_item SEPARATOR ', ') AS showcase,
          (SELECT COUNT(project_assignment.id_engineer) FROM project_assignment WHERE project_assignment.id_engineer=engineer.id GROUP BY project_assignment.id_engineer) AS total_project,
          ROUND(SUM(project_assignment.status_project='success' OR project_assignment.status_project='ongoing' OR project_assignment.status_project='pending' )*100/COUNT(project_assignment.id_engineer)) AS successrate
      FROM engineer
      LEFT JOIN skill
          ON engineer.id = skill.id
      LEFT JOIN showcase
          ON engineer.id = showcase.id
      LEFT JOIN engineer_acc
          ON engineer.id = engineer_acc.id
      LEFT JOIN project_assignment
          ON engineer.id = project_assignment.id_engineer
          ${queryString}
      GROUP BY id
      ORDER BY ${sort} ${order}
      LIMIT ${limit}
      OFFSET ${offset}
          `;
      let sql = `
          SELECT 
              engineer.id, 
              engineer.name, 
              GROUP_CONCAT(DISTINCT skill.skill_item SEPARATOR ', ') AS skill, 
              GROUP_CONCAT(DISTINCT showcase.showcase_item SEPARATOR ', ') AS showcase
          FROM engineer
          LEFT JOIN skill
              ON engineer.id = skill.id
          LEFT JOIN showcase
              ON engineer.id = showcase.id
              ${queryString}
          GROUP BY id
          ORDER BY ${sort} ${order}
          LIMIT ${limit}
          OFFSET ${offset}
          `;
      console.log(newSql);
      db.query(newSql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  getOneEngineer: params => {
    return new Promise((resolve, reject) => {
      let sql = `
        SELECT
            engineer.id,
            engineer.name,
            engineer.description,
            engineer.location,
            DATE_FORMAT(engineer.dateofbirth,'%d-%m-%Y') AS dateofbirth,
            DATE_FORMAT(engineer.datecreated, '%d/%m/%Y %H:%i') AS datecreated,
            DATE_FORMAT(engineer.dateupdated, '%d/%m/%Y %H:%i') AS dateupdated,
            GROUP_CONCAT(DISTINCT skill.skill_item SEPARATOR ', ') AS skill,
            GROUP_CONCAT(DISTINCT showcase.showcase_item SEPARATOR ', ') AS showcase,
            (SELECT COUNT(project_assignment.id_engineer) FROM project_assignment WHERE project_assignment.id_engineer=engineer.id GROUP BY project_assignment.id_engineer) AS total_project,
            ROUND(SUM(project_assignment.status_project='success' OR project_assignment.status_project='ongoing' OR project_assignment.status_project='pending' )*100/COUNT(project_assignment.id_engineer)) AS successrate
        FROM engineer
        LEFT JOIN skill
            ON engineer.id = skill.id
        LEFT JOIN showcase
            ON engineer.id = showcase.id
        LEFT JOIN project_assignment
            ON engineer.id = project_assignment.id_engineer
        WHERE engineer.id=${params}
        `;

      // console.log(sql)
      db.query(sql, (err, response) => {
        console.log(response);
        if (!err) {
          resolve(response[0]);
        } else {
          reject(err);
        }
      });
    });
  }
  // getTotalData: params => {
  //   return new Promise((reqso))
  // }
};
