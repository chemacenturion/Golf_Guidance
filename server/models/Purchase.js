const { model, Schema } = require('mongoose');

const purchaseSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  merch: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Merch'
    }
  ]
});

const Purchase = model('Purchase', purchaseSchema);

module.exports = Purchase;