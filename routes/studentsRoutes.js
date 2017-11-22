const mongoose = require('mongoose');
const { Schema } = mongoose;

const Student = mongoose.model('students');
const Promotion = mongoose.model('promotions');

module.exports = app => {
  app.post('/api/create_student', (req, res) => {
    const { lastname, firstname, promotionName } = req.body;

    Promotion.findOne({ name: promotionName }).then(result => {
      const { id } = result;

      const newStudent = new Student({
        lastname,
        firstname,
        promotion: id
      });

      newStudent.save().then(() => {
        res.send('');
      });
    });
  });
};
