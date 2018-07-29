this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<center>
			<br>
			<button>Button</button>
			<br>
			<br>
			<b>The "Postbox"</b>
			<br>
			<br>
			<textarea style="width: 700px; height: 250px;"></textarea>
			<br>
			<button>Post It</button>
			<br>
			<br>
		</center>
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
