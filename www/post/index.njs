this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<center>
			<form>
				<b>The "Postbox"</b>
				<br>
				<br>
				<textarea required></textarea>
				<br>
				<button type="submit">Post It</button>
			</form>
		</center>
	</div>
	<script src="https://apis.google.com/js/platform.js" async defer></script>
	<script src="script.js"></script>
`;
this.value += (await load("load/foot", this)).value;
this.done();
