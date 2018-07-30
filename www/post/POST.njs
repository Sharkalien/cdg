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
	const id = ticket.getPayload().sub;
	const user = users[id];
	if(user) {
		posts.push({
			user: id,
			date: Date.now(),
			body: this.req.body.body.trim().replace(brs, "<br>"),
			tags: this.req.body.tags.split(",").map(cleanTag).filter(forTags)
		});
		await fs.writeFile("secret/_posts.json", JSON.stringify(posts));
		await fs.unlink("secret/posts.json");
		await fs.rename("secret/_posts.json", "secret/posts.json");
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
