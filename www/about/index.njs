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
			<div style="flex-grow: 1;">Cole, the latest son in a long line of sons. He has the ability to read minds, fly, and also make people spontaneously combust. However, he does not do these things because he doesn't know how. He also has enchanted teeth that protect him and others against tulpas. But everyone knows tulpas are fake as shit.</div>
		</div>
		<h2 id="Chase">CHASE</h2>
		<div style="display: flex;">
			<img src="/img/about_chase.png" width="150" height="150" style="margin-right: 1em;">
			<div style="flex-grow: 1;">Chase, dude is so radical you can't find him in your entry level trigonometry courses. When he runs really fast with his arms straight out past his back while jogging he leaves behind a rainbow streak not unlike the swish of paint on those disposable cups. He can draw with his eyes both open and closed. And does so frequently. Don't ask him about his Jeff Bridges impression.</div>
		</div>
		<h2 id="Spicer">SPICER</h2>
		<div style="display: flex;">
			<img src="/img/about_spicer.png" width="150" height="150" style="margin-right: 1em;">
			<div style="flex-grow: 1;">Spicer, a vlogger (shorthand for "video blogger") and former chairman of the Board for Women Respecters LLC. When he isn't busy vlogging about his many sexual escapades, he sits at home voraciously writing Super Mario Bros. fan fiction in which all the settings take place in the Victorian era. Though his absolute favorite pastime is taking out the old craniometer and tracking his brain expansion.</div>
		</div>
		<h2><a href="https://miroware.io/" style="text-decoration: none;">GRANT</a></h2>
		<div style="display: flex;">
			<img src="/img/about_grant.png" width="150" height="150" style="margin-right: 1em;">
			<div style="flex-grow: 1;">Grant, the distinguished little red cube gremlin running around the inner workings of the site. He's the one that keeps the place running.</div>
		</div>
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
