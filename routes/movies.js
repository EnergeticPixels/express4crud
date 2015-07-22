var Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

router.route('/movies')
	.get(function(req, res) {
		Movie.find(function(err, movies) {
			if (err) {
				return res.send(err);
			}
			res.json(movies);
		});
	})
	.post(function(req, res) {
		var movie = new Movie(req.body);
		movie.save(function(err) {
			if (err) {
				return res.send(err);
			}
			res.send({message: 'Movie Added'});
		});
	});