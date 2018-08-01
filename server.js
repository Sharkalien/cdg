"use strict";
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
const postTagTest = /^post-(\d+)$/;
const formatDate = d => {
	d = new Date(d);
	return `${d.getMonth() + 1}-${d.getDate()}.${d.getFullYear()}`;
};
const cleanTag = tag => tag && tag.trim().toLowerCase().replace(whitespace, "-");
const forTags = (tag, i, tags) => tag && tags.indexOf(tag) === i;
const byTagHTML = tag => html`<a class="tag" href="/tagged/$${tag}">$${tag.replace(hyphens, " ")}</a>`;
const byTagClass = tag => `tag_${tag}`;
const postsPerPage = 10;
(async () => {
	const myEval = v => eval(v);
	require("replthis")(myEval);
	const users = JSON.parse(await fs.readFile("secret/users.json"));
	const posts = JSON.parse(await fs.readFile("secret/posts.json"));
	const renderPost = (id, i) => html`
		<div id="post_${id}" class="post box user_$${users[posts[i].user].name + (posts[i].tags.length ? ` ${posts[i].tags.map(byTagClass).join(" ")}` : "")}">
			<div class="header">
				By <a class="author" href="/tagged/$${users[posts[i].user].name}" style="$${users[posts[i].user].style}">$${users[posts[i].user].name}</a>
			</div>
			<div class="body">${posts[i].body}</div>
			<div class="footer">
				<a class="date" href="/tagged/post-${id}">${formatDate(posts[i].date)}</a>
				<span class="tags">${posts[i].tags.map(byTagHTML).join(", ")}</span>
			</div>
		</div>
	`;
	const noPosts = html`
		<br>
		<center>THE COMEDY GOLD MINE HAS RUN DRY.</center>
	`;
	const renderPosts = (page, tag, reverse) => {
		const prepend = tag ? html`
			<br>
			<i>tagged: $${tag}</i>
			<br>
		` : "";
		tag = cleanTag(tag);
		if(postTagTest.test(tag)) {
			const id = tag.replace(postTagTest, "$1");
			const i = id - 1;
			return prepend + (posts[i] ? renderPost(id, i) : noPosts);
		} else {
			let targetPosts = [...posts];
			targetPosts = reverse ? targetPosts.reverse() : targetPosts;
			if(tag) {
				targetPosts = targetPosts.filter(post => cleanTag(users[post.user].name) === tag || post.tags.includes(tag));
			}
			if(targetPosts.length) {
				let value = "";
				const maxPage = Math.ceil(targetPosts.length / postsPerPage);
				page = Math.min(maxPage, Math.ceil(page)); // TODO: simplify
				let start = (postsPerPage * (page - 2) + targetPosts.length % postsPerPage) % -10;
				const end = Math.min(targetPosts.length + 1, start + postsPerPage);
				start = Math.max(0, start);
				for(const post of targetPosts.slice(start, end).reverse()) {
					const i = posts.indexOf(post);
					value += renderPost(i + 1, i);
				}
				const urlStartForward = tag ? html`/tagged/$${tag}/` : "/page/";
				const urlStartReverse = tag ? html`/reverse/tagged/$${tag}/` : "/reverse/";
				const urlStart = reverse ? urlStartReverse : urlStartForward;
				const showPrevButton = page > 1;
				const showNextButton = page < maxPage;
				return prepend + html`
					<br>
					<div class="right">
						<a href="${(reverse ? urlStartForward : urlStartReverse) + maxPage}">${reverse ? "newest to oldest" : "oldest to newest"}</a>
					</div>
					${value}
					<div id="buttons">
						${(showPrevButton ? html`<a href="${urlStart}1"><img src="/img/arrow_first.png"></a>&nbsp;<a href="${urlStart + (page - 1)}"><img src="/img/arrow_prev.png"></a>` : "") + (showPrevButton && showNextButton ? html`&nbsp;<img src="/img/arrow_dot.png">&nbsp;` : "") + (showNextButton ? html`<a href="${urlStart + (page + 1)}"><img src="/img/arrow_next.png"></a>&nbsp;<a href="${urlStart + maxPage}"><img src="/img/arrow_last.png"></a>` : "")}
					</div>
				`;
			} else {
				return prepend + noPosts;
			}
		}
	};
	const verify = context => new Promise(resolve => {
		try {
			context.req.body = JSON.parse(context.req.body);
		} catch(err) {
			context.status = 400;
			context.value = err.message;
			context.done();
			return;
		}
		googleAuthClient.verifyIdToken({
			idToken: context.req.body.token,
			audience: secret.google.id
		}).then(async ticket => {
			const id = ticket.getPayload().sub;
			const user = users[id];
			if(user) {
				resolve(id);
			} else {
				context.value = "Your IP has been recorded and traced. You will not be safe.";
				context.status = 403;
			}
			context.done();
		}).catch(err => {
			context.value = err.message;
			context.status = 422;
			context.done();
		});
	});
	const save = async () => {
		await fs.writeFile("secret/_posts.json", JSON.stringify(posts));
		await fs.unlink("secret/posts.json");
		await fs.rename("secret/_posts.json", "secret/posts.json");
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
