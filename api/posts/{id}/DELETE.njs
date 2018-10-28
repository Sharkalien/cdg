await verify(this);
const id = (parseInt(this.params.id) || 0) - 1;
if(posts[id]) {
	posts.splice(id, 1);
	save();
} else {
	this.status = 404;
}
this.done();
