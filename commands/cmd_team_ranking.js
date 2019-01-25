const Discord = require("discord.js");
const {HLTV} = require("hltv");

module.exports = {
	name: "Team Ranking",
	short: "team_ranking",
	exec: (msg, args) => {
		HLTV.getTeamRanking().then(res => {
			let embed = new Discord.RichEmbed();
			let desc = `**. : HLTV CS:GO TOP 5 : .**

**1. ${res[0].team.name}** - ${res[0].points}pts

**2. ${res[1].team.name}** - ${res[1].points}pts

**3. ${res[2].team.name}** - ${res[2].points}pts

**4. ${res[3].team.name}** - ${res[3].points}pts

**5. ${res[4].team.name}**- ${res[4].points}pts

[Link](https://www.hltv.org/ranking/teams/)`;
			embed.setDescription(desc);
	        embed.setColor(msg.member.highestRole.color);
	        embed.setTimestamp(msg.createdAt);
	        embed.setFooter(`hltv.org`);

	        msg.channel.sendEmbed(embed);
		});
	}
};