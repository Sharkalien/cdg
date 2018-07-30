await verify(this);
const id = parseInt(this.params.id) - 1;
if(posts[id]) {
	posts.splice(id, 1);
} else {
	this.status = 404;
}
this.done();
