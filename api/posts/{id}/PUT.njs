await verify(this);
const id = (parseInt(this.params.id) || 0) - 1;
if (posts[id]) {
	Object.assign(posts[id], {
		title: String(this.req.body.title),
		body: String(this.req.body.body).replace(brs, "<br>"),
		tags: String(this.req.body.tags).split(",").map(cleanTag).filter(forTags)
	});
	save();
} else {
	this.status = 404;
}
this.done();
