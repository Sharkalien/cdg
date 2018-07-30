if(!this.title) {
	this.title = this.req.path.replace(pageNameTest, "$1").toUpperCase() || "GOLD";
}
if(!this.description) {
	this.description = "COMEDY-DOT GOLD IS HERE FOR ALL YOUR FUNNY BONE NEEDS";
}
this.value = html`
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title>COMEDY-DOT.$${this.title}</title>
			<meta name="keywords" content="comedy, gold, sharkalien, radical dude 42, timaeustesticle, spicer, gut bustingly, funny, comics">
			<meta name="description" content="$${this.description}">
			<meta name="theme-color" content="#ffcf40">
			<meta property="og:type" content="website">
			<meta property="og:url" content="http://comedy-dot.gold/">
			<meta property="og:site_name" content="COMEDY-DOT.GOLD">
			<meta property="og:image" content="http://comedy-dot.gold/img/favicon.gif">
			<meta property="og:title" content="$${this.title}">
			<meta property="og:description" content="$${this.description}">
			<meta name="google-signin-client_id" content="${secret.google.id}">
			<link rel="stylesheet" href="/css/cdg.css">
			<link rel="icon" href="/img/favicon.gif">
		</head>
		<body>
			<div id="superdiv">
				<div id="subdiv">
					<header>
						<a href="/">
							<img id="banner" src="/img/banner.png">
						</a>
						<div class="bars">
							<nav>
								<a href="/comics/"><img src="/img/comics.png" title="COMICS"></a>
								<a href="/funnies/"><img src="/img/funnies.png" title="FUNNIES"></a>
								<a href="/misc/"><img src="/img/misc.png" title="MISC"></a>
								<a href="/podcast/"><img src="/img/podcasts.png" title="PODCAST"></a>
								<a href="/about/"><img src="/img/info.png" title="ABOUT"></a>
							</nav>
						</div>
					</header>
					<main>
`;
this.done();
