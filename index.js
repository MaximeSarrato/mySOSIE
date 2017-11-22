const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/Manager');
require('./models/Promotion');
require('./models/Student');
require('./services/passport');

const app = express();

mongoose.Promise = require('bluebird');
mongoose.connect(keys.mongoURI, {
  useMongoClient: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  require('express-session')({
    secret: keys.cookieKey,
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

require('./routes/userManagingRoutes')(app);
require('./routes/authRoutes')(app);
require('./routes/studentsRoutes')(app);
require('./routes/promotionsRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is listening on port ' + PORT);
});
