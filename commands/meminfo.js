const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
	 const memberembed = new Discord.RichEmbed()
	 .setDescription(`Total Members = ${message.guild.memberCount}`)
	 .setColor("RANDOM")
	 message.channel.sendEmbed(memberembed);
	
};

module.exports.help = {
    name: "meminfo"
};
