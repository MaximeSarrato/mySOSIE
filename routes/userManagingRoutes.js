const mongoose = require('mongoose');
const { Schema } = mongoose;

// const Manager = require('../models/Manager');
const Manager = mongoose.model('managers');

module.exports = app => {
  app.post('/api/create_user', (req, res) => {
    const { username, password } = req.body;

    const newManager = new Manager({
      username: username,
      password: password
    });

    newManager.save().then(() => {
      // Here sending the username is useless
      // but without sending something
      // the redirection with history.push
      // doesn't works in index.js from actions
      // maybe because the promise is never resolved
      // if we send nothing
      res.send(username);
    });
  });
};
