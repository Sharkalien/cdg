await verify(this);
const id = parseInt(this.params.id) - 1;
if(posts[id]) {
	Object.assign(posts[id], {
		body: this.req.body.body.trim().replace(brs, "<br>"),
		tags: this.req.body.tags.split(",").map(cleanTag).filter(forTags)
	});
	save();
} else {
	this.status = 404;
}
this.done();
