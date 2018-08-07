this.title = "GOLD";
this.value = (await load("load/head", this)).value;
this.value += renderPosts(posts.length, this.params.tag, false, 1);
this.value += (await load("load/foot", this)).value;
this.done();
