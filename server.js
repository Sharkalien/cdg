console.log("< Server >");
const fs = require("fs-extra");
const {serve, html} = require("servecube");
const {OAuth2Client} = require("google-auth-library");
const secret = require("./secret/secret.js");
const production = process.argv[2] === "production";
const googleAuthClient = new OAuth2Client(secret.google.id);
const pageNameTest = /\/(.*?)\/?$/;
const brs = /\n/g;
const whitespace = /[\s-]+/g;
const hyphens = /-/g;
const formatDate = d => {
	d = new Date(d);
	return `${d.getMonth() + 1}-${d.getDay()}.${d.getFullYear()}`;
};
const cleanTag = tag => tag && tag.trim().toLowerCase().replace(whitespace, "-");
const forTags = (tag, i, tags) => tag && tags.indexOf(tag) === i;
const byTagHTML = tag => html`<a class="tag" href="/tagged/$${tag}">$${tag.replace(hyphens, " ")}</a>`;
const postsPerPage = 10;
(async () => {
	const myEval = v => eval(v);
	require("replthis")(myEval);
	const users = JSON.parse(await fs.readFile("secret/users.json"));
	const posts = JSON.parse(await fs.readFile("secret/posts.json"));
	const renderPosts = (page, tag) => {
		tag = cleanTag(tag);
		const targetPosts = tag ? posts.filter(post => cleanTag(users[post.user].name) === tag || post.tags.includes(tag)) : posts;
		if(targetPosts.length) {
			const maxPage = Math.ceil(targetPosts.length / postsPerPage);
			page = Math.min(maxPage, Math.ceil(page));
			let value = "";
			let start = (postsPerPage * (page - 2) + targetPosts.length % postsPerPage) % -10;
			const end = Math.min(targetPosts.length, start + postsPerPage - 1);
			start = Math.max(0, start);
			for(let i = end; i >= start; i--) {
				value += html`
					<div id="post_${i + 1}" class="post box">
						<div class="header">
							By <a class="author" href="/tagged/$${users[targetPosts[i].user].name}">$${users[targetPosts[i].user].name}</a>
						</div>
						<div class="body">${targetPosts[i].body}</div>
						<div class="footer">
							<span class="date">${formatDate(targetPosts[i].date)}</span>
							<span class="tags">${targetPosts[i].tags.map(byTagHTML).join(", ")}</span>
						</div>
					</div>
				`;
			}
			const urlStart = tag ? `/tagged/${tag}/` : "/page/";
			return value + html`
				<div class="buttons">
					${page > 1 ? html`<a href="${urlStart + (page - 1)}">&lt;-</a>` : ""}&nbsp;•&nbsp;${page < maxPage ? html`<a href="${urlStart + (page + 1)}">-&gt;</a>` : ""}
				</div>
			`;
		} else {
			return html`<center>No posts were found.</center>`;
		}
	};
	const cube = await serve({
		eval: myEval,
		domain: production ? "comedy-dot.gold" : "localhost:8080",
		errorDir: "error",
		loadDirs: ["load"],
		httpPort: 8080,
		githubPayloadURL: "/githubwebhook",
		githubSecret: secret.github.secret,
		githubToken: secret.github.token
	});
	const {load} = cube;
})();
