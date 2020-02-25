const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    
			if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('❌YOU DON\'T HAVE ENOUGH PERMISSIONS!❌')
			  const dmtext = args.slice(2).join(" ");
			const dmuser = message.mentions.users.first()
			message.delete()
			if(!dmuser) return;
			const dmmessage = new Discord.RichEmbed()
		.setDescription(`${dmtext}`)
		.setFooter('From IAT Bot')
                .setTimestamp()
		.setColor("RANDOM")
		dmuser.sendEmbed(dmmessage);
			

};

module.exports.config = {
    name: "dm",
    description: " A Command To Direct Message The Mentioned User To Through The Bot!",
    usage: "+dm [user] [text]",
    accessableby: "Staffs & Moderators",
    aliases: ["send"]
}
