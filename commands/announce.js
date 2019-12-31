const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
                        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('YOU DON\'T HAVE ENOUGH PERMISSIONS!')
			let ancmessage;
			let mchannel = message.mentions.channels.first()
            message.delete()
			if(mchannel){
				 ancmessage = args.slice(2).join(" ");
				const anc = new Discord.RichEmbed()
				.setDescription(`${ancmessage}`)
				.setFooter(`IAT Bot at ${message.createdAt}`)
				.setColor(0x6bffe1)
				mchannel.sendEmbed(anc);
			}else{
                ancmessage = args.slice(1).join(" ");
				const anc1 = new Discord.RichEmbed()
				.setDescription(`${ancmessage}`)
				.setFooter(`IAT Bot at ${message.createdAt}`)
				.setColor(0xffc859)
				message.channel.sendEmbed(anc1);
			}
};

module.exports.help = {
    name: "announce"
};
