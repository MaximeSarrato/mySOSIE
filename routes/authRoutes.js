const passport = require('passport');

module.exports = app => {
  app.post('/api/login', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.send({ error: 'BAD_LOGIN_OR_PASSWORD' });
      }
      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        return res.send(req.user);
      });
    })(req, res, next);
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
