const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let {body} = await superagent
		.get(`https://nekos.life/api/v2/fact`);

		let factembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle('Random Fact!')
		.setDescription(body.fact)
		.setTimestamp()
		.setFooter('IAT Bot', `${message.author.displayAvatarURL}`)
		message.channel.send(factembed);
};

module.exports.help = {
    name: "fact"
};
