this.res.set("Content-Type", "text/plain");
try {
	this.req.body = JSON.parse(this.req.body);
} catch(err) {
	this.status = 400;
	this.value = err.message;
	this.done();
	return;
}
googleAuthClient.verifyIdToken({
	idToken: this.req.body.token,
	audience: secret.google.id
}).then(async ticket => {
	const user = JSON.parse(await fs.readFile("secret/users.json"))[ticket.getPayload().sub];
	if(user) {
		// this.req.body.tags.split(",").map(byTag).filter(forTags)
	} else {
		this.value = "Your IP has been recorded and traced. You will not be safe.";
		this.status = 403;
	}
	this.done();
}).catch(err => {
	this.value = err.message;
	this.status = 422;
	this.done();
});
