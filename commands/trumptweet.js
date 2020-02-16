const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let text1 = args.slice(1).join(" ");
   
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&&text=${text1}`);

		let ttembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle('Trump Tweet LMAO:GWcorbinTopKek:!')
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(ttembed);
};

module.exports.help = {
    name: "trumptweet"
};
