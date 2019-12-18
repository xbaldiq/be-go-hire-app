const model = require('../Models/company');
const form = require('../Helpers/form');

module.exports = {
  getAllCompany: (_, res) => {
    model
      .getAllCompany()
      .then(response => {
        //resolve
        form.success(res, response);
        console.log('response :', response);
      })
      .catch(err => {
        //reject
        console.log(err);
      });
  },
  postCompany: (req, res) => {
    const { body } = req;
    model
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
    // res.json ({
    //   params,
    //   query,
    // });
    model
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
    model
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
