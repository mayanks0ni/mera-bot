const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let men2 = message.mentions.users.first();
	 if(!men2){
		 const nomen1 = new Discord.RichEmbed()
		 .setTitle('Please mention someone to kiss!')
		 .setFooter('IAT Bot')
		 .setTimestamp()
		 message.channel.send(nomen1)
	 }else{
	 

		let {body} = await superagent
		.get(`https://nekos.life/api/v2/img/kiss`);

		let kissembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle(`${message.author.username} kissed ${men2.username}! Kawaii!`)
		.setImage(body.url)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(kissembed);
	 } 

};

module.exports.help = {
    name: "kiss"
};
