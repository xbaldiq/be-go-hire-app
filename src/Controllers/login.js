const model = require('../Models/login');
const form = require('../Helpers/form');

module.exports = {
  loginUser: ({ body, params }, res) => {
    model
      .loginUser(body, params)
      .then(response => {
        if(response.invalidPassword){
          form.invalidPassword(res)
        }
        else if(response.invalidUsername){
          
          form.invalidUsername(res)
        }
        else{
          form.success(res, response);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
};
