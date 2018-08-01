this.value = (await load("load/head", this)).value;
this.value += renderPosts(posts.length / postsPerPage, false, true);
this.value += (await load("load/foot", this)).value;
this.done();
