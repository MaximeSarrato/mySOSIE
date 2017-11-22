const mongoose = require('mongoose');
const { Schema } = mongoose;

const promotionSchema = new Schema({
  name: String,
  finishingYear: Number
});

mongoose.model('promotions', promotionSchema);
