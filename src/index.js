const express = require('express');
const path = require('path');
const app = express();
const userRoute = require('./routes/users');

app.set('PORT', process.env.PORT || 3001);
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'))

const val = {title: "Home"}

app.use('/u',userRoute);
app.route('/')
	.get((req, res) => {
		res.render('index', {val: val});
	})

app.listen(app.get('PORT'), () => console.log(`Knock Knock I\'m on ${app.get('PORT')} port.`))
