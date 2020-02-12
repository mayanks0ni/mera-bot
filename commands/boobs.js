const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
	 

		let {body} = await superagent
		.get(`https://nekos.life/api/v2/img/tits`);

		let boobembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle(`Boobs Image For ${message.author.username}!`)
		.setImage(body.url)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(boobembed);
	 
};

module.exports.help = {
    name: "boobs"
};
