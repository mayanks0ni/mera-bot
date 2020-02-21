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
const lyricsembed = new Discord.RichEmbed()
.setTitle(`${text}\' Lyrics`)
.setDescription(body.lyrics, { split: true })
.setFooter('IAT bot') 
.setTimestamp()


		message.channel.send(lyricsembed);}
};

module.exports.help = {
    name: "lyrics"
};
