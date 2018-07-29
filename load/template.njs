this.description = "";
this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		This is a template!
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
