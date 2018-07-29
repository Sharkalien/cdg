this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<b>
			<center>
				<br>
				WELCOME TO COMEDY-DOT.GOLD, HOME OF THE WORLD WIDE WEB'S FUNNIEST FUNNYBONE TICKLERS.
				<br><br>
				I.E., <a href="#Leo">LEO</a>, <a href="#Cole">COLE</a>, <a href="#Chase">CHASE</a>, AND LAST BUT NOT LEAST, <a href="#Spicer">SPICER</a>.
				<br><br>
				WHAT IS COMEDY-DOT.GOLD, YOU ASK? WELL I'M GLAD YOU ASKED!
			</center>
			<br>
			<h2>
				<span id="Leo">LEO</span>
			</h2>
		</b>
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
