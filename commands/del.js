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
      message.bulkDelete(args[1]);
};

module.exports.help = {
    name: "del"
};
