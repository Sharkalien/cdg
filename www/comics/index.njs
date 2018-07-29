this.description = "COMEDY-DOT GOLD IS HERE WITH COMIX HOT OFF THE DIGITAL PRESS";
this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<b>
			<a href="https://mspfa.com/?s=13539&p=1">HOUSEHELD</a> - The end of the world on April Fool's Day.
			<br>
			<br>
			<a href="https://mspfa.com/?s=16470&p=1">RADICAL DUDE</a> - The story of a few tubular guys.
			<br>
			<br>
			<a href="https://mspfa.com/?s=23208&p=1">SCAREHOUSE</a> - A Romantic Hero navigates through the corridors of a Gothic mansion.
			<br>
			<br>
			<a href="https://mspfa.com/?s=20129&p=1">ABRAXAL SHELL</a> - Four kids who are really bad at video games play a video game.
			<br>
			<br>
			<a href="https://mspfa.com/?s=20518&p=1">MORNING</a> - Good morning. Time to play a game.
		</b>
		<br>
		<br>
		<center>
			<img src="/scraps/gamers.gif" height="70%" width="70%" title="WHAT'S UP GAMERS">
		</center>
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
