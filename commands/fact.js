const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
		.get(`https://nekos.life/api/v2/fact`);

		let factembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle('Random Fact!')
		.setDescription(body.fact)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(factembed);
};

module.exports.help = {
    name: "fact"
};
