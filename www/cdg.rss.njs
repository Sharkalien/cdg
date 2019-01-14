this.value = html`
<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0">
	<channel>
		<title>COMEDY-DOT.GOLD</title>
		<description>COMEDY-DOT.GOLD IS HERE FOR ALL YOUR FUNNY BONE NEEDS</description>
		<link>https://comedy-dot.gold/</link>
		<lastBuildDate>${date("r", posts[posts.length - 1].date)}</lastBuildDate>
		<pubDate>Sat, 07 Apr 2018 19:42:21 -0400</pubDate>
		<ttl>60</ttl>`;
const end = Math.max(0, posts.length - 20);
for(let i = posts.length - 1; i >= end; i--) {
	const id = i + 1;
	this.value += html`
		<item>
			<guid isPermaLink="false">post-${id}</guid>
			<pubDate>${date("r", posts[i].date)}</pubDate>
			<title>Post #${id}</title>
			<description>$${renderPost(id, i, true)}</description>
			<link>https://comedy-dot.gold/single/${id}</link>
		</item>`;
}
this.value += html`
	</channel>
</rss>`;
this.done();
