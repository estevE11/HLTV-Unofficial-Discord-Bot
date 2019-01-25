const {HLTV} = require("hltv");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
	console.log("Logged in as" + client.user.tag);
});

client.on("message", msg => {
	if(msg.content == "ping") {
		msg.reply("pong");
	}
});

client.login("NTM4NDczNjIyMjEwMjE1OTM4.Dy0YJQ.s9zdaPouTt-c3ZiZt5bPrsem1YE");