const express = require('express');
const router = express.Router();

const val = {title: "Users", users: []};

router.route('/all')
	.get((req, res) => {
		res.render('userAll', {val: val});
	})

router.route('/create')
	.get((req, res) => {
		res.render('userCreate', {val: val});
	})
	.post((req, res) => {
		const {body} = req;
		val.users.push(body);
		res.render('userAll', {val: val})
	})

module.exports = router;
