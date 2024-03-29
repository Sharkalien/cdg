this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<center>
			<form autocomplete="off">
				The "Editbox"
				<br>
				<br>
				Post ID: <input name="id" type="number" value="${posts.length}" min="1" max="${posts.length}" step="1">
				<br>
				<br>
				Title: <input name="title" required></input>
				<br>
				<textarea name="body" required></textarea>
				<br>
				Tags: <input name="tags"></input>
				<br>
				<br>
				<button type="submit">Edit It</button> <button id="delete" type="button">Delete It</button>
				<br>
				<br>
				<a href="/post/">The "Postbox"</a>
			</form>
		</center>
	</div>
	<div id="preview" class="post box">
		<div class="header">
			By <a class="author" href="javascript:;">?</a>
		</div>
		<div class="body"></div>
		<div class="footer">
			<span class="date">${formatDate(Date.now())}</span>
			<span class="tags"></span>
		</div>
	</div>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
	<script src="script.js"></script>
`;
this.value += (await load("load/foot", this)).value;
this.done();
