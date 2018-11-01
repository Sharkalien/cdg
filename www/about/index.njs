this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<center>
			WELCOME TO COMEDY-DOT.GOLD, HOME OF THE WORLD WIDE WEB'S FUNNIEST FUNNYBONE TICKLERS.
			<br><br>
			I.E., <a href="#Leo">LEO</a>, <a href="#Cole">COLE</a>, <a href="#Chase">CHASE</a>, AND LAST BUT NOT LEAST, <a href="#Spicer">SPICER</a>.
			<br><br>
			WHAT IS COMEDY-DOT.GOLD, YOU ASK? WELL I'M GLAD YOU ASKED!
			<br>
			CDG IS THE STICKY PINK BRAIN-CHILD OF THE FOUR YOUNG MEN PREVIOUSLY ALLUDED TO.
		</center>
		<br>
		<h2 id="Leo">LEO</h2>
		<div style="display: flex;">
			<img src="/img/about_leo.png" width="150" height="150" style="margin-right: 1em;">
			<div style="flex-grow: 1;">Leo, the golden boy. Born and raised in the prairie fields of Oklahoma.</div>
		</div>
		<h2 id="Cole">COLE</h2>
		<div style="display: flex;">
			<img src="/img/about_cole.png" width="150" height="150" style="margin-right: 1em;">
			<div style="flex-grow: 1;">Cole, always in a constant state of pain. The only thing on this mortal plane that can ease his affliction is a pair of prominent hooters.</div>
		</div>
		<h2 id="Chase">CHASE</h2>
		<div style="display: flex;">
			<img src="/img/about_chase.png" width="150" height="150" style="margin-right: 1em;">
			<div style="flex-grow: 1;">Chase, a big stupid boy of 50 years with no eyes and a disregard for authority. His teachers describe him as a problem child.</div>
		</div>
		<h2 id="Spicer">SPICER</h2>
		<div style="display: flex;">
			<img src="/img/about_spicer.png" width="150" height="150" style="margin-right: 1em;">
			<div style="flex-grow: 1;">Spicer, the brainiest of the bunch. The sheer magnitude of his cranium is enough to crumble the ground beneath him if it weren't for his indomitable will over reality.</div>
		</div>
		<h2><a href="https://miroware.io/" style="text-decoration: none;">GRANT</a></h2>
		<div style="display: flex;">
			<img src="/img/about_grant.png" width="150" height="150" style="margin-right: 1em;">
			<div style="flex-grow: 1;">Grant, the distinguished little red cube gremlin running around the inner workings of the site. He's the one that keeps the place together.</div>
		</div>
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
