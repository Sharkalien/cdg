this.description = "COMEDY-DOT.GOLD IS HERE WITH COMIX HOT OFF THE DIGITAL PRESS";
this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<h2>COMICS</h2>
		<a href="https://mspfa.com/?s=13539&p=1">HOUSEHELD</a> - The end of the world on April Fool's Day.<br>
		<br>
		<a href="https://mspfa.com/?s=16470&p=1">RADICAL DUDE</a> - The story of a few tubular guys.<br>
		<br>
		<a href="https://mspfa.com/?s=23208&p=1">SCAREHOUSE</a> - A Romantic Hero navigates through the corridors of a Gothic mansion.<br>
		<br>
		<a href="https://mspfa.com/?s=20518&p=1">MORNING</a> - Good morning. Time to play a game.<br>
		<br>
		<h2>FUNNIES</h2>`;
const targetPosts = posts.filter(post => post.tags.includes("funnies"));
for(let i = targetPosts.length - 1; i >= 0; i--) {
	const post = targetPosts[i];
	if(post.tags.includes("funnies")) {
		this.value += html`
		${formatDate(post.date)} <a href="https://comedy-dot.gold/single/tagged/funnies/${i + 1}">$${post.title}</a><br>`;
	}
}
this.value += html`
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
