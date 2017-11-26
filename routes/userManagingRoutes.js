const mongoose = require('mongoose');
const { Schema } = mongoose;
const asyncWrap = require('../middlewares/asyncWrap');
const Manager = mongoose.model('managers');

module.exports = app => {
  app.post(
    '/api/create_user',
    asyncWrap(async (req, res, next) => {
      const { username, password } = req.body;
      const lowerCasedUsername = username.toLowerCase();

      const newManager = new Manager({
        username: lowerCasedUsername,
        password: password,
        usernameToDisplay: username
      });

      const existingUser = await Manager.findOne({ username });
      if (existingUser) {
        res.send({ error: 'USERNAME_ALREADY_EXIST' });
      } else {
        newManager.save().then(() => {
          // Here sending the username is useless
          // but without sending something
          // the redirection with history.push
          // doesn't works in index.js from actions
          // maybe because the promise is never resolved
          // if we send nothing
          res.send(username);
        });
      }
    })
  );
};
