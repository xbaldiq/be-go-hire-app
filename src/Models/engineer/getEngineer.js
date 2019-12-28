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
          GROUP_CONCAT(DISTINCT skill.skill_item SEPARATOR ', ') AS skill,
          GROUP_CONCAT(DISTINCT showcase.showcase_item SEPARATOR ', ') AS showcase,
          (SELECT COUNT(engineer_acc.id) FROM engineer_acc WHERE engineer_acc.id=engineer.id GROUP BY engineer_acc.id) AS total_project,
          ROUND(SUM(engineer_acc.accept=1)*100/COUNT(engineer_acc.id)) AS successrate
      FROM engineer
      LEFT JOIN skill
          ON engineer.id = skill.id
      LEFT JOIN showcase
          ON engineer.id = showcase.id
      LEFT JOIN engineer_acc
          ON engineer.id = engineer_acc.id
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
      console.log(params);
      let sql = `
        SELECT
            engineer.id,
            engineer.name,
            GROUP_CONCAT(DISTINCT skill.skill_item SEPARATOR ', ') AS skill,
            GROUP_CONCAT(DISTINCT showcase.showcase_item SEPARATOR ', ') AS showcase,
            (SELECT COUNT(engineer_acc.id) FROM engineer_acc WHERE engineer_acc.id=engineer.id GROUP BY engineer_acc.id) AS total_project,
            ROUND(SUM(engineer_acc.accept=1)*100/COUNT(engineer_acc.id)) AS successrate
        FROM engineer
        LEFT JOIN skill
            ON engineer.id = skill.id
        LEFT JOIN showcase
            ON engineer.id = showcase.id
        LEFT JOIN engineer_acc
            ON engineer.id = engineer_acc.id
        WHERE engineer.id=${params}
        `;
      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
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
