const db = require('../models');

module.exports = {
	findAll: function(req, res) {
		db.Article
			.find({})
			.then(dbModel => res.json(dbModel))
			.catch(error => res.status(422).json(error));
	},
	create: function (req, res) {
		db.Article
			.update(req.body, req.body, {upsert: true})
			.then(dbModel => res.json(dbModel))
			.catch(error => res.status(422).json(error));
	},
	remove: function (req, res) {
		db.Article
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(error => res.status(422).json(error));
	}
};