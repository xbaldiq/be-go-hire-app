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
        FROM engineer ${queryString}
        `;

      db.query(sql, (err, result) => {
        if (!err) {
          const total_page = Math.ceil(result[0].total_data / limit);
          const current_page = query.page || 1;
          const next_page = total_page - current_page;
          const prev_page = total_page - 1 - next_page;
          let paginationArrPrev = []
          let paginationArrNext = []
          let paginationIllustrate = []
          
          // Prev page
          for (let index = 1; index < current_page; index++) {
            paginationArrPrev.push(index)
            paginationIllustrate.push(index)
          }

          // Current page
          paginationIllustrate.push(`[ ${current_page} ]`)

          // Next Page
          for(let index = (parseInt(current_page)+1); index <= total_page; index++){
            paginationArrNext.push(index)
            paginationIllustrate.push(index)
          }

          // Set result
          result[0].total_page = Math.ceil(result[0].total_data / limit);
          result[0].current_page = current_page;
          result[0].prev_page = paginationArrPrev;
          result[0].next_page = paginationArrNext;
          result[0].pagination = paginationIllustrate

          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }
};
