const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
 let men = message.mentions.users.first() || message.author
   let userurl = men.displayAvatarURL
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=trash&&url=${userurl}`);

		let trashembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle(`Trash ${men.username}!`)
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(trashembed); 
};

module.exports.config = {
    name: "trash",
    description: "A Command To Get The Trash Image Of Yourself Or The Mentioned User!",
    usage: "!userinfo (@mention)",
    accessableby: "Members",
    aliases: [""]
}
