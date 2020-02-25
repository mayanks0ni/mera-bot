const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
			message.delete()
			if(!message.member.hasPermission("MANAGE_MESSAGES")) {
				const nomrperms = new Discord.RichEmbed()
				.setDescription('**YOU DON\'T HAVE ENOUGH PERMISSIONS!!**')
				.setColor(0xff0000)
				message.channel.sendEmbed(nomrperms);
			}else{
			let rolename;
			rolename = args.slice(1).join(" ")
			if(!rolename){
				const nomenrole = new Discord.RichEmbed()
				.setDescription('**You didn\'t wrote the roles name!**')
				.setColor(0xcdacfc)
				message.channel.sendEmbed(nomenrole);
			} else{
			const mentionedRole = message.guild.roles.find(r => r.name === rolename);
			message.channel.send(`${mentionedRole}`);
		}	} 
};

module.exports.config = {
    name: "mentionrole",
    description: "A Command To Mention The Role Through The Bot!",
    usage: "+mentionrole [rolename]",
    accessableby: "Staffs & Moderators",
    aliases: ["mr"]
}
