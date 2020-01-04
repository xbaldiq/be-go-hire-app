const del = require('../Models/company/deleteCompany');
const get = require('../Models/company/getCompany');
const patch = require('../Models/company/patchCompany');
const post = require('../Models/company/postCompany');
const project = require('../Models/company/project/handleProject');
// const model = require('../Models/companyBackup');
const form = require('../Helpers/form');

module.exports = {
  getAllCompany: (_, res) => {
    get
      .getAllCompany()
      .then(response => {
        //resolve
        form.success(res, response);
      })
      .catch(err => {
        //reject
        console.log(err);
      });
  },
  getProject: (req, res) => {
    project
      .getProject(req.user.id)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  assignProject: (req, res) => {
    const { body } = req;
    project
      .assignProject(body)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  getAssignedProject: (req, res) => {
    project
      .getAssignedProject(req.user.id)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  createProject: (req, res) => {
    const { body } = req;
    project
      .createProject(body,req.user.id)
      .then(response => {
        form.success(res, response);
      })
      .catch(err => {
        console.log(err);
      });
  },
  postCompany: (req, res) => {
    const { body } = req;
    // console.log('body postCompany: ', req.body)
    post
      .postCompany(body)
      .then(response => {
        // resolve
        const data = {
          id: response.insertId,
          name: body.name,
          logo: body.logo,
          location: body.location,
          description: body.description
        };
        form.success(res, data);
      })
      .catch(err =>
        // reject
        console.log(err)
      );
  },
  patchCompany: (req, res) => {
    const { params, body } = req;
    patch
      .patchCompany(body, params)
      .then(response => {
        res.json(response);
      })
      .catch(err =>
        console.log(err)
      );
  },
  deleteCompany: (req, res) => {
    const { params } = req;
    del
      .deleteCompany(params)
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
