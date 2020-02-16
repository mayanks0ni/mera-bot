const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
 let userurl = message.author.displayAvatarURL
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=trash&&url=${userurl}`);

		let awooifyembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle(`Trash ${message.author.username}!`)
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(awooifyembed);
};

module.exports.help = {
    name: "trash"
};
