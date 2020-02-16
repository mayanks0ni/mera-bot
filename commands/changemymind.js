const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    
    let text = args.slice(1).join(" ");
   
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=changemymind&&text=${text}`);

		let tweetembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(tweetembed);
};

module.exports.help = {
    name: "cmm"
};
