async function validAuthHeader(err, req, res, next) {
	console.info(
		'request/response passing thru validAuthHeader middleware: see the log below for all properties on your "req.headers"'
	);
	console.table(req.headers);

	if (
		!req.headers['Authorization'] ||
		!req.headers['Authorization'].startsWith('Bearer')
	) {
		console.error(err);
		res.status(401).send('Unauthorized Request');
	}

	const parsedApiToken = JSON.parse(req.headers['Authorization']).split('-').join('');
	if (parsedApiToken.toLowerCase() !== process.env.API_TOKEN.toLowerCase()) {
		console.error(err);
		res.status(403).send('Unauthorized Request: invalid authorization header.');
	}

	next(err);
}
