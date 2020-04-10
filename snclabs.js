"use strict";
console.log("< SNCLabs Archive Bot >");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client();
const exitOnError = err => {
	console.error(err);
	process.exit(1);
};
process.once("unhandledRejection", exitOnError);
client.once("error", exitOnError);
client.once("disconnect", exitOnError);
let guild;
client.once("ready", () => {
	guild = client.guilds.get("697985207604871219");
});
const syntax = /^#(.+)(?:\n((?:.|\n)+))?$/;
client.on("message", msg => {
	if (msg.author && msg.author.id === "100950015454773248" && msg.channel.id === "625518313157689349") {
		const match = msg.content.match(syntax);
		if (match) {
			const channel = guild.channels.find(({name}) => name === match[1]);
			if (channel) {
				channel.send(match[2], {
					files: msg.attachments.map(({url}) => url)
				}).then(({url}) => {
					msg.channel.send(`<${url}>`);
				}).catch(({message}) => {
					msg.channel.send(`${message}, stupid jew!`);
				});
			} else {
				msg.channel.send("Channel not found, stupid jew!");
			}
		} else {
			msg.channel.send("Wrong syntax, stupid jew!");
		}
	}
});
client.login(JSON.parse(fs.readFileSync("secret/snclabs.json")).token);
fs.watch(__filename, () => {
	process.exit();
});
require("replthis")(v => eval(v));
