this.res.set("Content-Type", "application/json");
const id = (parseInt(this.params.id) || 0) - 1;
if(posts[id]) {
	this.value = {
		...posts[id]
	};
	this.value.user = users[this.value.user];
} else {
	this.status = 404;
}
this.done();
