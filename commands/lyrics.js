const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let uname = args[1]
    if(!uname){
		const nouname = new Discord.RichEmbed()
		.setTitle('Please Provide The Artists Name!')
		.setFooter('IAT Bot')
		.setColor(0xff0000)
		.setTimestamp()
		message.channel.send(nouname);
	}
    let text = args.slice(2).join(" ");
	if(!text){
		const notext = new Discord.RichEmbed()
		.setTitle('Please Provide The Songs Name!')
		.setFooter('IAT Bot')
		.setColor(0xff0000)
		.setTimestamp()
		message.channel.send(notext);
	}else{
   
   let {body} = await superagent
		.get(`https://api.lyrics.ovh/v1/${uname}/${text}`);

		let lyricsembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setDescription(body.lyrics)
                .addField(body.lyrics)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(lyricsembed);}
};

module.exports.help = {
    name: "lyrics"
};
