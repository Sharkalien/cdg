this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<center>
			<b>
				Hey! Welcome to COMEDY-DOT.GOLD!
				<br>
				<br>
				The site is not finished yet, but feel free to gaze upon the amazing construction of the most AMAZING comedy site known to man!
			</b>
			<br>
			<br>
			<img src="/img/alf.gif" title="HA! I KILL ME">
			<br>
			<img src="/img/favicon.gif">
		</center>
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
