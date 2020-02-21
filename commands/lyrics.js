const Discord = module.require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let aname = args[1]
    if(!aname){
		const noaname = new Discord.RichEmbed()
		.setTitle('Please Provide The Artist's Name!')
		.setFooter('IAT Bot')
		.setColor(0xff0000)
		.setTimestamp()
		message.channel.send(noaname);
	}
    let lname = args.slice(2).join(" ");
	if(!lname){
		const nolname = new Discord.RichEmbed()
		.setTitle('Please Provide The Songs Name!')
		.setFooter('IAT Bot')
		.setColor(0xff0000)
		.setTimestamp()
		message.channel.send(nolname);
	}else{
   
   let {body} = await superagent
		.get(`https://api.lyrics.ovh/v1/${aname}/${laname}`);

		let lyricsembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setImage(body.lyrics)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(lyricsembed);}
};

module.exports.help = {
    name: "lyrics"
};
