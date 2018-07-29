this.title = this.params.status;
this.description = "COMEDY DOT GOLD IS HERE WITH MANY ERRORS IN YOUR FAVOR";
this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<center>
			404 404 404
			<br>
			<img src="/img/favicon.gif">
		</center>
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
