const commands = require("./commands.js");

module.exports = (msg) => {
	let args = msg.content.split(" ");
	commands.list[args[1]].exec(msg, args);
}