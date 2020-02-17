const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    
	 

		let {body} = await superagent
		.get(`http://www.splashbase.co/api/v1/images/random`);

		let wlembed = new Discord.RichEmbed()
                .setTitle(`Wallpaper For ${message.author.username}`)
		.setColor("RANDOM")
		.setImage(body.url)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(wlembed);
	
};

module.exports.help = {
    name: "wallpaper"
};
