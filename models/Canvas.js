var mongoose = require('mongoose');

var CanvasSchema = new mongoose.Schema({
  image: String
});

mongoose.model('Canvas', CanvasSchema);