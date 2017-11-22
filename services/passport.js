const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const Manager = mongoose.model('managers');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Manager.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new LocalStrategy((username, password, done) => {
    Manager.findOne({ username, password }, (err, user) => {
      if (!err) {
        done(null, user);
      }
    });
  })
);
