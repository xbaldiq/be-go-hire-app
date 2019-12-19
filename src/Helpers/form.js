module.exports = {
  success: (res, data, status=200, msg='success') => {
    res.json({
      status,
      msg,
      data
    });
  },
  failed: (res, data, status=400, msg='failed') => {
    res.status(status).json({
      status,
      msg,
      data
    });
  },
  usernameExist: res => {
    res.status(403).send({ msg: 'Username Already Exist' });
  },
  invalidPassword: res => {
    res.status(403).send({ msg: 'Invalid Password' });
  }
};
