const model = require('../Models/engineer');
const form = require('../Helpers/form');

module.exports = {
  getAllEngineer: (_, res) => {
    model
      .getAllEngineer()
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
    console.log(body)
    model
      .postEngineer(body)
      .then(response => {
        const data = {
          id: response.insertId,
          name: body.name,
          description: body.description,
          location: body.location,
          dateofbirth: body.dateofbirth,
          datecreated: body.datecreated,
          dateupdated: body.dateupdated,
        };
        form.success(res, data);
      })
      .catch(err =>
        // reject
        console.log(err)
      );
  },
  patchEngineer: (req, res) => {
    const {params, query} = req;
    // res.json ({
    //   params,
    //   query,
    // });
    model
      .patchEngineer (query, params)
      .then (response => {
        //resolve
        res.json (response);
      })
      .catch (err =>
        //reject
        console.log (err)
      );
  },
  deleteEngineer: (req, res) => {
    const {params, query} = req;
    model
      .deleteEngineer(params)
      .then (response => {
        //resolve
        res.json (response);
      })
      .catch (err =>
        //reject
        console.log (err)
      );
  }
};
