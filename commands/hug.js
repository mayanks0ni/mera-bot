const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let men1 = message.mentions.users.first();
	 if(!men1){
		 const nomen = new Discord.RichEmbed()
		 .setTitle('Please mention someone to hug!')
		 .setFooter('IAT Bot')
		 .setTimestamp()
     .setColor(0xff0000)
		 message.channel.send(nomen)
	 }else{
	 

		let {body} = await superagent
		.get(`https://nekos.life/api/v2/img/hug`);

		let hugembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle(`${message.author.username} hugs ${men1.username}! So cute!`)
		.setImage(body.url)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(hugembed);
	 } 
};

module.exports.help = {
    name: "hug"
};
