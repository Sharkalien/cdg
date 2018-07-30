this.res.set("Content-Type", "application/json");
const id = parseInt(this.params.id) - 1;
if(posts[id]) {
	this.value = {
		...posts[id]
	};
	this.value.user = users[this.value.user].name;
} else {
	this.status = 404;
}
this.done();
