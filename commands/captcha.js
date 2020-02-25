const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let uname = args[1]
    if(!uname){
		const nouname = new Discord.RichEmbed()
		.setTitle('Please Provide a Username!')
		.setFooter('IAT Bot')
		.setColor(0xff0000)
		.setTimestamp()
		message.channel.send(nouname);
	}else{
   let men = message.mentions.users.first() || message.author
   let userurl = men.displayAvatarURL
   
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=captcha&&username=${uname}&&url=${userurl}`);

		let captchaembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(captchaembed);}
};

module.exports.config = {
    name: "captcha",
    description: "A Command To View Captcha Image Of Your Avatar Or The Mentioned User\'s Avatar!",
    usage: "+captcha [user]",
    accessableby: "Members",
    aliases: ["cap", "cpt"]
}
