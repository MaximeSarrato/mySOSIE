const mongoose = require('mongoose');
const { Schema } = mongoose;

const Promotion = mongoose.model('promotions');
const Student = mongoose.model('students');

module.exports = app => {
  // Create a promotion with specified name and year
  app.post('/api/create_promotion', (req, res) => {
    const { name, finishingYear } = req.body;

    const newPromotion = new Promotion({
      name,
      finishingYear
    });

    newPromotion.save().then(promo => {
      res.send(res.send(promo));
    });
  });

  // Get promotions with passed finishingYear
  app.get('/api/fetch_promotions/:finishingYear', (req, res) => {
    if (req.params.finishingYear) {
      const { finishingYear } = req.params;
      Promotion.find({ finishingYear }).then(promotions => {
        res.send(promotions);
      });
    } else {
      res.send(null);
    }
  });

  // Get students whose are in the promotion with specified id
  app.get('/api/promotions/:promotionID', (req, res) => {
    if (req.params.promotionID) {
      Student.find({ promotion: req.params.promotionID }).then(students => {
        res.send(students);
      });
    } else {
      console.log('null request');
      res.send(null);
    }
  });
};
