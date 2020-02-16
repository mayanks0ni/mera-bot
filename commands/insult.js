const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
		.get(`https://evilinsult.com/generate_insult.php?lang=en&type=json`);
                let insultuser = message.mentions.users.first();
		let insultembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle(`Fuck You ${insultuser.username}!`)
		.setDescription(body.number)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(insultembed);
};

module.exports.help = {
    name: "insult"
};
