const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      message: {
        type: String,
        required: true,
        trim: true,
      }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
