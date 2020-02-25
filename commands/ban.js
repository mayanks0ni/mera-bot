const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
			  message.delete()
			if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('YOU DON\'T HAVE ENOUGH PERMISSIONS!')
			const user = message.mentions.users.first();
			if (user) {
				const member = message.guild.member(user);
				if (member) {
					member.ban({
						reason: 'They were bad!',
					}).then(() => {
						const banembed = new Discord.RichEmbed()
						        .setTitle('Member Bannned')
							.setDescription(`Succesfully bannned ${user.tag}`)
							.setColor(0x00fa21)
						message.channel.sendEmbed(banembed);
					}).catch(err => {
						const errorbanembed = new Discord.RichEmbed()
							.setDescription('The user cannot be banned due to no permissions or due to mine role is below that members role!')
							.setColor(0xfa0000)
						message.channel.sendEmbed(errorbanembed);
						console.error(err);
					});
				} else {
					const notinguildembed = new Discord.RichEmbed()
						.setDescription('The mentioned user is not in the guild!')
						.setColor(0xabfa00)
					message.channel.sendEmbed(notinguildembed);
				}
			} else {
				const nomention = new Discord.RichEmbed()
					.setDescription('You didn\'t mention the user to ban!')
					.setColor(0x6c00fa)
				message.channel.sendEmbed(nomention);
				message.delete(3000);
			} 

};

module.exports.config = {
    name: "ban",
    description: "A Command To Ban The Mentioned User!",
    usage: "+ban [user]",
    accessableby: "Staffs & Moderators",
    aliases: [""]
}
