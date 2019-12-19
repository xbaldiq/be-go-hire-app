const db = require('../Configs/db');
module.exports = {
  getAllEngineer: (params, query) => {
    let filterKey = 1;
    let filterVal = '';

    const sort = query.sort || 'id';
    const order = query.order || 'asc';
    const limit = query.limit || 5;
    const page = query.page || 1;

    let offset = limit * page - limit;

    // console.log(query);
    if (query.name) {
      filterKey = 'name';
      filterVal = query.name;
    } else if (query.location) {
      filterKey = 'location';
      filterVal = query.location;
    } else if (query.skill) {
      filterKey = 'skill_item';
      filterVal = query.skill;
    }

    // let filteredKey = mysql.raw('asd');
    // const filterParam = Object.keys(query)[0]

    return new Promise((resolve, reject) => {
      let sql = `
        SELECT 
            engineer.id, 
            engineer.name, 
            GROUP_CONCAT(DISTINCT skill.skill_item SEPARATOR ', ') AS skills, 
            GROUP_CONCAT(DISTINCT showcase.showcase_item SEPARATOR ', ') AS showcase
        FROM engineer
        LEFT JOIN skill
            ON engineer.id = skill.id
        LEFT JOIN showcase
            ON engineer.id = showcase.id
        WHERE ${filterKey}
        LIKE '%${filterVal}%'
        GROUP BY id
        ORDER BY ${sort} ${order}
        LIMIT ${limit}
        OFFSET ${offset}
        `;

      console.log('query sql: ', sql);

      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  getEngineer: (params, query) => {
    const idEngineer = params.id;
    return new Promise((resolve, reject) => {
      let sql = `
        SELECT *
        FROM engineer
        WHERE id=${idEngineer}
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
      const dateCreate = new Date();
      // const now = Date().toString;
      let value = [
        body.name,
        body.description,
        body.location,
        body.dateofbirth,
        dateCreate,
        body.dateupdated
      ];

      let sql =
        'INSERT INTO engineer (name,description,location,dateofbirth,datecreated,dateupdated) VALUES ( ? )';
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
      console.log('query = ', query);
      console.log('params = ', params);
      const sql = 'UPDATE engineer SET ?, dateupdated=NOW() WHERE ?'
      db.query(sql,
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
      let sql = 'DELETE FROM engineer WHERE ?';
      let value = [params];
      db.query(sql, value, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
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
  },
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
  }, 
  deleteEngineerSkill: (params) => {
    return new Promise((resolve, reject) => {
      console.log('params: ', params);  
      let sql = `DELETE FROM skill WHERE id=${params.id} AND skill_no=${params.skill_no}`;
      console.log(sql);

      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }, 
  postEngineerShowcase: (body, params) => {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO showcase (id, showcase_item) VALUES (${params.id},'${body.showcase_item}')`

      console.log(sql)
      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    })
  },
  patchEngineerShowcase: (body, params) => {
    return new Promise((resolve, reject) => {
      console.log('params: ', params);
      console.log('body: ', body);
      let sql = `UPDATE showcase SET showcase_item = '${body.showcase_item}' WHERE showcase.id = ${params.id} AND showcase.showcase_no = '${params.showcase_no}'`;
      console.log(sql);
      db.query(sql, (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
  deleteEngineerShowcase: (params) => {
    return new Promise((resolve, reject) => {
      console.log('params: ', params);  
      let sql = `DELETE FROM showcase WHERE id=${params.id} AND showcase_no=${params.showcase_no}`;
      console.log(sql);

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
