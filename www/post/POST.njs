this.res.set("Content-Type", "application/json");
try {
	this.req.body = JSON.parse(this.req.body);
} catch(err) {
	this.status = 400;
	this.value = {
		error: err.message
	};
	this.done();
	return;
}
googleAuthClient.verifyIdToken({
	idToken: this.req.body.token,
	audience: secret.google.id
}).then(ticket => {
	const id = ticket.getPayload().sub;
	console.log(id);
	this.done();
}).catch(err => {
	this.value = {
		error: err.message
	};
	this.status = 422;
	this.done();
});
