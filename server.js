console.log("< Server >");
const fs = require("fs-extra");
const {serve, html} = require("servecube");
const youKnow = require("./data/youknow.js");
const production = process.argv[2] === "production";
(async () => {
	const cube = await serve({
		eval: v => {
			return eval(v);
		},
		domain: "comedy-dot.gold",
		httpPort: 8080,
		httpsRedirect: production,
		githubPayloadURL: "/githubwebhook",
		githubSecret: youKnow.github.secret,
		githubToken: youKnow.github.token
	});
	const {load} = cube;
	process.openStdin().on("data", input => {
		console.log(eval(String(input)));
	});
})();
