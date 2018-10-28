const id = await verify(this);
posts.push({
	user: id,
	date: Date.now(),
	title: String(this.req.body.title),
	body: String(this.req.body.body).replace(brs, "<br>"),
	tags: String(this.req.body.tags).split(",").map(cleanTag).filter(forTags)
});
save();
