this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box" style="overflow: auto; clear: right;">
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
			<h2 id="Leo">
				LEO
			</h2>
				<img src="/img/about_leo.png">
				Leo, the golden boy. Born and raised in the prairie fields of Oklahoma.
			<h2 id="Cole">
				COLE
			</h2>
				<img src="/img/about_cole.png">
				Cole, always in a constant state of pain. The only thing on this mortal plane that can ease his affliction is a pair of prominent hooters.
			<h2 id="Chase">
				CHASE
			</h2>
				<img src="/img/about_chase.png">
				Chase, who has a simple dream of owning a genuine ALF fursuit stitched with the very same material the ALF puppets were made with during the run of the show.
			<h2 id="Spicer">
				SPICER
			</h2>
				<img src="/img/about_spicer.png">
				Spicer, the brainiest of the bunch. The sheer magnitude of his cranium is enough to crumble the ground beneath him if it weren't for his indomitable will over reality.
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
