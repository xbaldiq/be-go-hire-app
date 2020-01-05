const model = require('../Models/register');
const form = require('../Helpers/form');

module.exports = {
  registerUser: ({ body, params }, res) => {
    model
      .registerUser(body, params)
      .then(response => {
        if(response == 'registerInvalidFormat'){
          console.log(response)
          form.invalidFormatRegister(res, response, 400);
        } 
        else if(response == 403){
          form.usernameExist(res)
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
