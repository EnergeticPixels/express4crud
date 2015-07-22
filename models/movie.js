var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
	title: String,
	releaseYear: String,
	director: String,
	genre: String
});

// exports the model so that we have access to it from the outside
module.exports = mongoose.model('Movie', movieSchema);