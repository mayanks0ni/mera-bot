const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let usertotake = message.mentions.members.first();
			let rolename1 = args.slice(2).join(" ")
	        const role132 = message.guild.roles.find(r=>r.name === rolename1)
			if(!message.member.hasPermission("MANAGE_ROLES")){
				return message.channel.send(new Discord.RichEmbed().setTitle('You Don\'t Have Enough Permissions!').setColor(0xff0000).setFooter('IAT Bot').setTimestamp());
			}
    if(!usertotake || !rolename1){
        const noinfo1 = new Discord.RichEmbed()
        .setTitle('This Command Is Used Like This \`+takerole [user] [rolename]\`')
        .setFooter('IAT Bot')
        .setTimestamp()
        .setColor(0xff0000)
        message.channel.send(noinfo1);
    }else{
    if(!usertotake.roles.find(r=>r.name === rolename1)){
		const nothasrole = new Discord.RichEmbed()
		.setTitle(`${usertotake.displayName} Does Not Has ${rolename1} Role!`)
		.setColor(0xff0000)
		.setFooter('IAT Bot')
		message.channel.send(nothasrole);
	}else{
    usertotake.removeRole(role132);
    const success = new Discord.RichEmbed()
    .setTitle(`Successfully Removed ${rolename1} Role From User ${usertotake.displayName}!`)
    .setFooter('IAT Bot')
    .setColor("GREEN")
    message.channel.send(success);
    }	
	}
};

module.exports.config = {
    name: "takerole",
    description: "A Command To Remove Role Any Role To A PArticular User!!",
    usage: "+takerole [user] [rolename]",
    accessableby: "Staffs & Moderator",
    aliases: ["removerole", "rrole"]
}
