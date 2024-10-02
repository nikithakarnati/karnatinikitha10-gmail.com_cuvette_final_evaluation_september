const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  heading: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  likes: { type: Number, default: 0 },
  bookmarked: { type: Boolean, default: false }
});

module.exports = mongoose.model('Story', storySchema);
