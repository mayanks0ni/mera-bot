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
	}
    let text = args.slice(2).join(" ");
	if(!text){
		const notext = new Discord.RichEmbed()
		.setTitle('Please Provide Text To Tweet!')
		.setFooter('IAT Bot')
		.setColor(0xff0000)
		.setTimestamp()
		message.channel.send(notext);
	}else{
   
   let {body} = await superagent
		.get(`https://nekobot.xyz/api/imagegen?type=tweet&&username=${uname}&&text=${text}`);

		let tweetembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setImage(body.message)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(tweetembed);}
};

module.exports.config = {
    name: "tweet",
    description: "A Command To Tweet Through The Provided Username!",
    usage: "+tweet [username] [text]",
    accessableby: "Members",
    aliases: [""]
}
