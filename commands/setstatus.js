const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
 const noperms = new Discord.RichEmbed()
.setTitle('You Don\'t Have Enough Permissions!')
.setFooter('IAT Bot')
.setTimestamp()


message.channel.send(noperms);
}else{
const type1 = args[1]
    const status1 = args.slice(2).join(" ");
   bot.user.setActivity(status1, {type:type1});
  const statusembed = new Discord.RichEmbed()
.setTitle(`Updated My Status to ${type1} ${status1}`)
.setFooter('IAT Bot')
.setTimestamp()
message.channel.send(statusembed);
}
};

module.exports.help = {
    name: "setstatus"
};
