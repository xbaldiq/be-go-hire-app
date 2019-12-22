const db = require('../../Configs/db');

module.exports = {
  paginationEngineer: query => {
    return new Promise((resolve, reject) => {
      const limit = query.limit || 5;

      // Set Query filter
      let queryString = '';
      if (query.name) {
        filter1 = 'name';
        // filter1Val = query.name;
        queryString = `WHERE name LIKE '%${query.name}%'`;
      }
      if (query.skill) {
        if (query.name) {
          queryString += `AND skill_item LIKE '%${query.skill}%'`;
        } else {
          queryString = `WHERE skill_item LIKE '%${query.skill}%'`;
        }
      }

      const sql = `
        SELECT count(engineer.id) as total_data 
        FROM engineer
        LEFT JOIN skill
            ON engineer.id = skill.id
        LEFT JOIN showcase
            ON engineer.id = showcase.id
            ${queryString}
        `;

      db.query(sql, (err, result) => {
        if (!err) {
          result[0].total_page = Math.ceil(result[0].total_data / limit);
          // console.log(result)
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }
};
