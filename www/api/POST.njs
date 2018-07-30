const id = await verify(this);
posts.push({
	user: id,
	date: Date.now(),
	body: this.req.body.body.trim().replace(brs, "<br>"),
	tags: this.req.body.tags.split(",").map(cleanTag).filter(forTags)
});
save();
