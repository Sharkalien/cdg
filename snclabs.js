"use strict";
console.log("< SNCLabs Archive Bot >");
const fs = require("fs");
const Discord = require("discord.js");
const client = new Discord.Client({
	intents: ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES']
});
const exitOnError = err => {
	console.error(err);
	process.exit(1);
};
process.once("unhandledRejection", exitOnError);
client.once("error", exitOnError);
client.once("disconnect", exitOnError);
let guild;
client.once("ready", () => {
	guild = client.guilds.cache.get("697985207604871219");
});
const channelSyntax = /^#(.+)(?:\n((?:.|\n)+))?$/;
const messageSyntax = /^https:\/\/discord\.com\/channels\/\d+\/(\d+)\/(\d+)(?:\n((?:.|\n)+))?$/;
client.on("message", msg => {
	if (msg.author && msg.author.id === "100950015454773248" && msg.channel.id === "625518313157689349") {
		let match = msg.content.match(channelSyntax);
		if (match) {
			const channel = guild.channels.find(({ name }) => name === match[1]);
			if (channel && channel.type === 'text') {
				channel.send({
					content: match[2],
					files: msg.attachments.map(({ url }) => url)
				}).then(({ url }) => {
					msg.channel.send(`<${url}>`);
				}).catch(({ message }) => {
					msg.channel.send(`${message} 👃👃👃`);
				});
			} else {
				msg.channel.send("Channel not found 👃👃👃");
			}
		} else {
			match = msg.content.match(messageSyntax);
			if (match) {
				const channel = guild.channels.get(match[1]);
				if (channel && channel.type === 'text') {
					channel.messages.edit(match[2], {
						content: match[3],
						files: msg.attachments.map(({ url }) => url)
					}).then(({ url }) => {
						msg.channel.send(`<${url}>`);
					}).catch(({ message }) => {
						msg.channel.send(`${message} 👃👃👃`);
					});
				} else {
					msg.channel.send("Channel not found 👃👃👃");
				}
			} else {
				msg.channel.send("Wrong syntax 👃👃👃");
			}
		}
	}
});
client.login(JSON.parse(fs.readFileSync("secret/snclabs.json")).token);
fs.watch(__filename, () => {
	process.exit();
});
require("replthis")(v => eval(v));
