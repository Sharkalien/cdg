this.description = "";
this.value = (await load("load/head", this)).value;
this.value += html`
	template
`;
this.value += (await load("load/foot", this)).value;
this.done();
