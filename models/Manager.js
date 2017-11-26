const mongoose = require('mongoose');
const { Schema } = mongoose;

const managerSchema = new Schema({
  username: String,
  password: String,
  usernameToDisplay: String
});

mongoose.model('managers', managerSchema);
