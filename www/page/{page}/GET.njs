this.title = "GOLD";
this.value = (await load("load/head", this)).value;
this.value += renderPosts(this.params.page);
this.value += (await load("load/foot", this)).value;
this.done();
