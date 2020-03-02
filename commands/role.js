const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let usertoadd = message.mentions.members.first();
			let rolename = args.slice(2).join(" ")
	        const role12 = message.guild.roles.find(r=>r.name === rolename)
			if(!message.member.hasPermission("MANAGE_ROLES")){
				return message.channel.send(new Discord.RichEmbed().setTitle('You Don\'t Have Enough Permissions!').setColor(0xff0000).setFooter('IAT Bot').setTimestamp());
			}
    if(!usertoadd || !rolename){
        const noinfo = new Discord.RichEmbed()
        .setTitle('This Command Is Used Like This \`+role [user] [rolename]\`')
        .setFooter('IAT Bot')
        .setTimestamp()
        .setColor(0xff0000)
        message.channel.send(noinfo);
    }else{
    if(usertoadd.roles.find(r=>r.name === rolename)){
		const hasrole = new Discord.RichEmbed()
		.setTitle(`${usertoadd.displayName} Already Has ${rolename}`)
		.setColor(0xff0000)
		.setFooter('IAT Bot')
		message.channel.send(hasrole);
	}else{
    usertoadd.addRole(role12);
    const success = new Discord.RichEmbed()
    .setTitle(`Successfully Added Role ${rolename} To ${usertoadd.displayName}!`)
    .setFooter('IAT Bot')
    .setColor("GREEN")
    message.channel.send(success);
    }	
	}
};

module.exports.config = {
    name: "role",
    description: "A Command To Add Role Any Role To A PArticular User!!",
    usage: "+role [user] [rolename]",
    accessableby: "Staffs & Moderator",
    aliases: ["addrole", "giverole"]
}
