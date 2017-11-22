const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
  lastname: String,
  firstname: String,
  promotion: [{ type: Schema.Types.ObjectId, ref: 'Promotion' }]
});

mongoose.model('students', studentSchema);
