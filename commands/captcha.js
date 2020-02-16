const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let uname = args[1]
    let url = message.author.displayAvatarURL
   
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=captcha&&username=${uname}&&url=${url}`);

		let captchaembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(captchaembed);
};

module.exports.help = {
    name: "captcha"
};
