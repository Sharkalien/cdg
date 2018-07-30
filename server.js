console.log("< Server >");
const fs = require("fs-extra");
const {serve, html} = require("servecube");
const {OAuth2Client} = require("google-auth-library");
const secret = require("./secret/secret.js");
const production = process.argv[2] === "production";
const googleAuthClient = new OAuth2Client(secret.google.id);
const pageNameTest = /\/(.*?)\/?$/;
const byTag = tag => tag.trim().toLowerCase();
const forTags = (tag, i, tags) => tags.indexOf(tag) === i;
const brs = /\n/g;
(async () => {
	const myEval = v => eval(v);
	require("replthis")(myEval);
	const users = JSON.parse(await fs.readFile("secret/users.json"));
	const posts = JSON.parse(await fs.readFile("secret/posts.json"));
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
