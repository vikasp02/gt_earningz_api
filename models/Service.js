const mongoose = require('mongoose')

const ExtraStuffShcema = new mongoose.Schema({
    stuffName: {
        type: String,
        required: true
    },
    stuffCost: {
        type: Number,
        required: true,
    },
    stuffSale: {
        type: Number,
        required: true,
    }
});

const CustomerSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  serviceCharge: {
    type: Number,
    required: true,
  },
  extraStuffAdded: {
    type: Boolean,
    required: true,
  },
  extraStuff: [ExtraStuffShcema],
    serviceDate: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Service', CustomerSchema);

