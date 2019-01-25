global.prefix = "!hltv ";

const Discord = require("discord.js");
const client = new Discord.Client();
const {HLTV} = require("hltv");

const commands = require("./commands/commands.js");

client.on("ready", () => {
	console.log("Logged in as " + client.user.tag);
	commands.init();
});

client.on("message", msg => {
	if(msg.content == "ping") {
		msg.reply("pong");
	}

	if(msg.content.startsWith(global.prefix)) {
		commands.exec(msg);
	}
});

client.login(require("./token.js"));