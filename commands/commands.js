const cmd_dispatch = require("./dispatcher.js");

exports.init = () => {
	addCmd("team_ranking");
};

exports.list = {
	"help": {
		name: "Help",
		short: "help",
		exec: (msg, args) => {
			console.log("help");
		}
	}
};

const addCmd = (name) => {
	const c = require("./cmd_" + name + ".js");
	exports.list[c.short] = c;
}

exports.exec = (msg) => {
	cmd_dispatch(msg);
}