this.value = html`
<?xml version="1.0" encoding="utf-8" ?>
<rss version="2.0">
	<channel>
		<title>COMEDY-DOT.GOLD</title>
		<description>COMEDY-DOT.GOLD IS HERE FOR ALL YOUR FUNNY BONE NEEDS</description>
		<link>https://comedy-dot.gold/</link>
		<lastBuildDate>${date("r", new Date(posts[posts.length - 1].date))}</lastBuildDate>
		<pubDate>Sat, 07 Apr 2018 19:42:21 -0400</pubDate>
		<ttl>60</ttl>`;
for(let i = Math.min(19, posts.length - 1); i >= 0; i--) {
	const id = i + 1;
	this.value += html`
		<item>
			<guid isPermaLink="false">post-${id}</guid>
			<pubDate>${date("r", new Date(posts[i].date))}</pubDate>
			<title>Post #${id}</title>
			<description>$${renderPost(id, i)}</description>
			<link>https://comedy-dot.gold/tagged/post-${id}</link>
		</item>`;
}
this.value += html`
	</channel>
</rss>`;
this.done();
