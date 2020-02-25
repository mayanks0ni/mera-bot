const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
       if (!message.member.hasPermission("MANAGE_MESSAGES")) {
       const nodelperms = new Discord.RichEmbed()
      .setAuthor('You Do Not Have Enough Permissions!!')
      .setFooter('IAT Bot') 
      .setTimestamp()
      message.channel.sendEmbed(nodelperms);
     }else{
       message.delete()
      message.channel.bulkDelete(args[1]);}
};

module.exports.config = {
    name: "del",
    description: "A Command To Delete A Particular Number Of Messages In The Channel!",
    usage: "+del [amount]",
    accessableby: "Staffs & Moderator",
    aliases: ["clear"]
}
