const model = require('../Models/login');
const form = require('../Helpers/form');

module.exports = {
  loginUser: ({ body, params }, res) => {
    model
      .loginUser(body, params)
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
