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
				.setFooter('IAT Bot')
                                .setTimestamp()
				.setColor(0x6bffe1)
				mchannel.sendEmbed(anc);
			}else{
                ancmessage = args.slice(1).join(" ");
				const anc1 = new Discord.RichEmbed()
				.setDescription(`${ancmessage}`)
				.setFooter('IAT Bot')
                                .setTimestamp()
				.setColor(0xffc859)
				message.channel.sendEmbed(anc1);
			}
};

module.exports.config = {
    name: "announce",
    description: "A Commamd To Make Announcements in a Particular Channel or In Which The Command Is Used!",
    usage: "+announce [channel] [text]",
    accessableby: "Staffs & Moderators",
    aliases: ["anc"]
}
