console.log("< Server >");
const fs = require("fs-extra");
const {serve, html} = require("servecube");
const secret = require("./secret/secret.js");
const production = process.argv[2] === "production";
(async () => {
	const myEval = v => eval(v);
	require("replthis")(myEval);
	const cube = await serve({
		eval: myEval,
		domain: production ? "comedy-dot.gold" : "localhost:8080",
		errorDir: "error",
		httpPort: 8080,
		githubPayloadURL: "/githubwebhook",
		githubSecret: secret.github.secret,
		githubToken: secret.github.token
	});
	const {load} = cube;
})();
