const model = require('../Models/register');
const form = require('../Helpers/form');

module.exports = {
  registerUser: ({ body, params }, res) => {
    model
      .registerUser(body, params)
      .then(response => {
        //resolve
        form.success(res, response);
      })
      .catch(err => {
        //reject
        console.log(err);
      });
  }
};
