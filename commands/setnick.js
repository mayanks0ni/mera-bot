const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const member12 = message.mentions.members.first()
		let nickname = args.slice(2).join(" ");
		if(!message.member.hasPermission("MANAGE_NICKNAMES")){
			return message.channel.send(new Discord.RichEmbed().setTitle('You Don\'t Have Enough Permissions!').setColor(0xff0000).setFooter('IAT Bot').setTimestamp());

		}else{
    if(!member12 || !nickname){
        const nomem = new Discord.RichEmbed()
		.setTitle('This Is Used In This Way \`+setnick [user] [nickname]\`!')
		.setColor(0xff0000)
		.setFooter('IAT Bot')
		.setTimestamp()
		message.channel.send(nomem);
}else{
	await member12.setNickname(nickname)
	return message.channel.send(new Discord.RichEmbed().setTitle(`Successfully Changed ${member12.displayName} To ${nickname}!`).setColor("RANDOM").setFooter('IAT Bot').setTimestamp());
}
}}
};

module.exports.config = {
    name: "setnick",
    description: "A Command To Chnage The Nickname Of Any User In The Guild!",
    usage: "+setnick [user] [nickname]",
    accessableby: "Staffs & Moderator",
    aliases: ["nick", "nickname"]
}
