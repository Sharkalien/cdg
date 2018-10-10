if(!this.title) {
	this.title = this.req.path.replace(pageNameTest, "$1").toUpperCase() || "GOLD";
}
this.title = `COMEDY-DOT.${this.title}`;
if(!this.description) {
	this.description = "COMEDY-DOT.GOLD IS HERE FOR ALL YOUR FUNNY BONE NEEDS";
}
this.value = html`
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="UTF-8">
			<title>$${this.title}</title>
			<meta name="keywords" content="comedy, gold, sharkalien, radical dude 42, timaeustesticle, spicer, gut bustingly, funny, comics">
			<meta name="description" content="$${this.description}">
			<meta name="theme-color" content="#ffcf40">
			<meta property="og:type" content="website">
			<meta property="og:url" content="https://comedy-dot.gold/">
			<meta property="og:site_name" content="COMEDY-DOT.GOLD">
			<meta property="og:image" content="https://comedy-dot.gold/img/embed.png">
			<meta property="og:title" content="$${this.title}">
			<meta property="og:description" content="$${this.description}">
			<meta name="google-signin-client_id" content="${secret.google.id}">
			<link rel="stylesheet" href="/css/cdg.css">
			<link rel="icon" href="/img/halloween.png">
		</head>
		<body>
			<div id="superdiv">
				<div id="subdiv">
					<header>
						<a href="/">
							<img id="banner" src="/img/banner.png">
						</a>
						<nav>
							<a href="/comics/"><img src="/img/comics.png" title="COMICS"></a>
							<a href="/tagged/funnies"><img src="/img/funnies.png" title="FUNNIES"></a>
							<a href="/misc/"><img src="/img/misc.png" title="MISC"></a>
							<a href="/podcast/"><img src="/img/podcasts.png" title="PODCAST"></a>
							<a href="/about/"><img src="/img/info.png" title="ABOUT"></a>
							<a href="/cdg.rss"><img src="/img/rss.png" title="RSS"></a>
						</nav>
					</header>
					<main>
`;
this.done();
