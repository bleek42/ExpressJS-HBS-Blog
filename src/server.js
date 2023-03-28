const express = require('express');
const { Sequelize } = require('sequelize');
const session = require('express-session');
const hbs = require('express-handlebars');
const cors = require('cors');

const app = express();

app.use(express.json()); // ? allows incoming reqs to be read in json format
app.engine('hbs', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/login', async (req, res) => {
    console.log('showing /login view');
    res.render('login');
});


const connection = new Sequelize('sqlite::memory');
console.log(
	'checking DB connection...',
	connection
		.authenticate()
		.then((status) => status)
		.catch((err) => (err ? err : 'unknown error'))
);

// const corsOpts = {
// 	origin:
// 		process.env.NODE_ENV !== 'development'
// 			? ['http://localhost:5000', 'http://localhost:3001']
// 			: '*',
// 	credentials: true,
// 	maxAge: 2400,
// };

// app.use(cors(corsOpts));
app.use(
	express.urlencoded({
		limit: '1mb',
		extended: true,
	})
);
// ? establish connection, sync any new models
connection.sync({ force: true }).then((conn) => {
	console.info('sync status', conn);
	app.listen(PORT, () => console.info(`Express.js API listening on ${PORT || 3001}`));
});
