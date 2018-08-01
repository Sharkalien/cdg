this.title = "GOLD";
this.value = (await load("load/head", this)).value;
this.value += renderPosts(this.params.page, this.params.tag, true);
this.value += (await load("load/foot", this)).value;
this.done();
