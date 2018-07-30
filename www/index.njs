this.value = (await load("load/head", this)).value;
this.value += html`
	<div class="box">
		<b>By <a href="/tagged/Chase" style="color: #00ff66;">Chase</a></b> <!--Author-->
		<br>
		<br>
		<!--Content Area!! But you already knew that. -->
		<b>Content Area</b>
		<br>
		<br>
		<center><img src="img/welcome.gif"></center>
		<b>This image is centered.</b>
		<br>
		<br>
		<img src="img/welcome.gif">
		<br>
		<b>This image is not.</b>
		<br>
		<br>
		<b>4-20.2018 <a href="/tagged/something">something</a><b>,</b> <a href="/tagged/clickable-tag-links">clickable tag links</a><b>,</b> <a href="/tagged/etc">etc</a></b>
		<!--End of content area. -->
	</div>
	<div class="box">
		<b>By <a href="/tagged/Cole" style="color: #f76400;">Cole</a></b> <!--Author-->
		<br>
		<br>
		<!--Content Area!! But you already knew that. -->
		<b>imagine this is a cool comic, that cole made. it probably has like, super neat designs and that sort of childlike naïvety aspect to it that cole often brings to the party, if you know what i mean</b>
		<br>
		<br>
		<b>4-19.2018 <a href="/comics">comics</a><b>,</b> <a href="/tagged/sample-text">sample text</a></b>
		<!--End of content area. -->
	</div>
	<div class="buttons">
		<a href="JAVASCRIPT MAGIC THAT SUBTRACTS A NUMBER FROM THE PAGE I GUESS">&lt;-</a> • <a href="same thing but adding">-&gt;</a> <!--imagine these are cool images, instead of lame dumb little text arrows -->
	</div>
`;
this.value += (await load("load/foot", this)).value;
this.done();
