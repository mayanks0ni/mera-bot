const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    
	 

		let {body} = await superagent
		.get(`https://nekos.life/api/v2/img/wallpaper`);

		let wlembed = new Discord.RichEmbed()
                .setTitle(`Wallpaper For ${message.author.username}`)
		.setColor("RANDOM")
		.setImage(body.response)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(wlembed);
	
};

module.exports.help = {
    name: "wallpaper"
};
