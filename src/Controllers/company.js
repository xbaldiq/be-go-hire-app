const del = require('../Models/company/deleteCompany');
const get = require('../Models/company/getCompany');
const patch = require('../Models/company/patchCompany');
const post = require('../Models/company/postCompany');
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
  postCompany: (req, res) => {
    const { body } = req;
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
    const { params, query } = req;
    patch
      .patchCompany(query, params)
      .then(response => {
        //resolve
        res.json(response);
      })
      .catch(err =>
        //reject
        console.log(err)
      );
  },
  deleteCompany: (req, res) => {
    const { params, query } = req;
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
