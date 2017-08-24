var mongoose = require('mongoose');

var CanvasSchema = new mongoose.Schema({
  imageUrl: String
});

mongoose.model('Canvas', CanvasSchema);