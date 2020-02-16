const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let uname = args[1]
    let text = args.slice(2).join(" ");
   
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=tweet&&username=${uname}&&text=${text}`);

		let tweetembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(tweetembed);
};

module.exports.help = {
    name: "tweet"
};
