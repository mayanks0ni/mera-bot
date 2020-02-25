const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let text1 = args.slice(1).join(" ");
	if(!text1){
		const notext = new Discord.RichEmbed()
		.setTitle('Please Provide Text To Tweet!')
		.setFooter('IAT Bot')
		.setColor(0xff0000)
		.setTimestamp()
		message.channel.send(notext);
	}else{
   
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&&text=${text1}`);

		let ttembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle('Trump Tweet LMAO!')
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(ttembed);}
};

module.exports.config = {
    name: "trumptweet",
    description: "A Command To Get Trmup Tweet Image!",
    usage: "+trmuptweet [text]",
    accessableby: "Members",
    aliases: ["tt"]
}
