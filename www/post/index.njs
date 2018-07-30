this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<center>
			<form>
				The "Postbox"
				<br>
				<br>
				<textarea name="body" required></textarea>
				<br>
				Tags: <input name="tags"></input>
				<br>
				<br>
				<button type="submit">Post It</button>
			</form>
		</center>
	</div>
	<div id="preview" class="post box">
		<div class="header">
			By <a class="author" href="javascript:;">You</a>
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
