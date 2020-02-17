const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    
    let text = args.slice(1).join(" ");
   if(!text){
		const notext = new Discord.RichEmbed()
		.setTitle('Please Provide Some Text!')
		.setFooter('IAT Bot')
		.setColor(0xff0000)
		.setTimestamp()
		message.channel.send(notext);
	}else{
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=changemymind&&text=${text}`);

		let tweetembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(tweetembed);}
};

module.exports.help = {
    name: "cmm"
};
