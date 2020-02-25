const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
			if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('YOU DON\'T HAVE ENOUGH PERMISSIONS!')
			const user1 = message.mentions.users.first();
			if (user1) {
				const member1 = message.guild.member(user1);

				if (member1) {
					member1.kick('Optional reason that will display in the audit logs').then(() => {
						message.reply(`Successfully kicked ${user1.tag}`);
					}).catch(err => {
						const error = new Discord.RichEmbed()
							.setDescription('The user cannot be kicked due to no permissions or due to mine role is below that members role!')
							.setColor(0xfa0000)
						message.channel.sendEmbed(error);
						console.error(err);
					});
				} else {
					message.reply('That user isn\'t in this guild!');
				}
			}
};

module.exports.config = {
    name: "kick",
    description: "A Command To Kick The Mentioned User!",
    usage: "+kick [user]",
    accessableby: "Staffs & Moderators",
    aliases: [""]
}
