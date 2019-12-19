const model = require('../Models/engineer');
const form = require('../Helpers/form');

module.exports = {
  getAllEngineer: (req, res) => {
    const { params, query } = req;
    model
      .getAllEngineer(params, query)
      .then(response => {
        //resolve
        form.success(res, response);
      })
      .catch(err => {
        //reject
        console.log(err);
      });
  },
  getEngineer: (req, res) => {
    const { params, query } = req;
    model
      .getEngineer(params, query)
      .then(response => {
        //resolve
        form.success(res, response);
      })
      .catch(err => {
        //reject
        console.log(err);
      });
  },
  postEngineer: (req, res) => {
    const { body } = req;
    // console.log('isibody', body);
    model
      .postEngineer(body)
      .then(response => {
        const data = {
          id: response.insertId,
          name: body.name,
          description: body.description,
          location: body.location,
          dateofbirth: body.dateofbirth,
          datecreated: new Date(),
          dateupdated: body.dateupdated
        };
        form.success(res, data);
      })
      .catch(err =>
        // reject
        console.log(err)
      );
  },
  patchEngineer: (req, res) => {
    const { query, params } = req;
    model
      .patchEngineer(query, params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  deleteEngineer: (req, res) => {
    const { params } = req;
    model
      .deleteEngineer(params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  postEngineerSkill: (req, res) => {
    const { body, params } = req;
    model
      .postEngineerSkill(body, params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  patchEngineerSkill: (req, res) => {
    const { body, params } = req;
    model
      .patchEngineerSkill(body, params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  deleteEngineerSkill: (req, res) => {
    const { params } = req;
    model
      .deleteEngineerSkill(params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  postEngineerShowcase: (req, res) => {
    const { body, params } = req;
    // console.log(body)
    // console.log(params)
    model
      .postEngineerShowcase(body, params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  patchEngineerShowcase: (req, res) => {
    const { body, params } = req;
    model
      .patchEngineerShowcase(body, params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  deleteEngineerShowcase: (req, res) => {
    const { params } = req;
    model
      .deleteEngineerShowcase(params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  }
};
