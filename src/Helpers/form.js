module.exports = {
  success: (res, data, status = 200, msg = 'success') => {
    res.json({
      status,
      msg,
      data
    });
  },
  failed: (res, data, status = 400, msg = 'failed') => {
    res.status(status).json({
      status,
      msg,
      data
    });
  },
  invalidFormatRegister: res => {
    res.status(422).send({ msg: 'Username and password must have at least 5 character and ONE number' });
  },
  noResult: msg => {
    res.status(204).json({
      msg
    });
  },
  notAccepted: msg => {
    res.status(200).json({
      msg
    });
  },
  usernameExist: res => {
    res.status(403).json({ msg: 'Username Already Exist' });
  },
  invalidPassword: res => {
    res.status(422).send({ msg: 'Invalid Password' });
  },
  invalidUsername: res => {
    res.status(401).send({ msg: 'Username not registered' });
  }
};
