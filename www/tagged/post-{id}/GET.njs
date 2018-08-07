this.title = "GOLD";
this.value = (await load("load/head", this)).value;
const id = parseInt(this.params.id);
this.value += renderPosts(0, `post-${id}`, false, true);
const showPrevButton = id > 1;
const showNextButton = id < posts.length;
this.value += html`
	<div id="buttons">
		${(showPrevButton ? html`<a href="/tagged/post-1"><img src="/img/arrow_first.png"></a>&nbsp;<a href="/tagged/post-${id - 1}"><img src="/img/arrow_prev.png"></a>` : "") + (showPrevButton && showNextButton ? html`&nbsp;<img src="/img/arrow_dot.png">&nbsp;` : "") + (showNextButton ? html`<a href="/tagged/post-${id + 1}"><img src="/img/arrow_next.png"></a>&nbsp;<a href="/tagged/post-${posts.length}"><img src="/img/arrow_last.png"></a>` : "")}
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
