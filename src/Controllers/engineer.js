const delEng = require('../Models/engineer/deleteEngineer');
const getEng = require('../Models/engineer/getEngineer');
const patchEng = require('../Models/engineer/patchEngineer');
const postEng = require('../Models/engineer/postEngineer');
const form = require('../Helpers/form');

module.exports = {
  getAllEngineer: (req, res) => {
    const { params, query } = req;

    if( req.user.user_type == 'company' ){
      getEng
      .getAllEngineer(params, query)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        console.log(err);
      });
    } else if (req.user.user_type == 'engineer') {
      getEng
      .getAllEngineer(params, query)
      .then(response => {
        form.success(res, response.filter(result => result.id === req.user.id));
      })
      .catch(err => {
        console.log(err);
      });
    }
  },
  getEngineer: (req, res) => {
    const { params, query } = req;
    getEng
      .getOneEngineer(params, query)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  postEngineer: (req, res) => {
    const { body } = req;
    postEng
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
        console.log(err)
      );
  },
  patchEngineer: (req, res) => {
    const { query, params } = req;
    console.log(req.user)
    patchEng
      .patchEngineer(query, req.user.id)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  },
  deleteEngineer: (req, res) => {
    const { params } = req;
    delEng
      .deleteEngineer(params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  },
  postEngineerSkill: (req, res) => {
    const { body, params } = req;
    model
      .postEngineerSkill(body, params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  },
  patchEngineerSkill: (req, res) => {
    const { body, params } = req;
    model
      .patchEngineerSkill(body, params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  },
  deleteEngineerSkill: (req, res) => {
    const { params } = req;
    model
      .deleteEngineerSkill(params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  },
  postEngineerShowcase: (req, res) => {
    const { body, params } = req;
    model
      .postEngineerShowcase(body, params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  },
  patchEngineerShowcase: (req, res) => {
    const { body, params } = req;
    model
      .patchEngineerShowcase(body, params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  },
  deleteEngineerShowcase: (req, res) => {
    const { params } = req;
    model
      .deleteEngineerShowcase(params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  }
};
