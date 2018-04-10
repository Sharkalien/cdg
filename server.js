console.log("< Server >");
const fs = require("fs-extra");
const {serve, html} = require("servecube");
const secret = require("./data/secret.js");
const production = process.argv[2] === "production";
(async () => {
	const cube = await serve({
		eval: v => eval(v),
		domain: production ? "comedy-dot.gold" : "localhost:8080",
		errorDir: "error",
		httpPort: 8080,
		githubPayloadURL: "/githubwebhook",
		githubSecret: secret.github.secret,
		githubToken: secret.github.token
	});
	const {load} = cube;
	process.openStdin().on("data", input => {
		console.log(eval(String(input)));
	});
})();
