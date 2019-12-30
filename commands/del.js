const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
       if (!message.member.hasPermission("MANAGE_MESSAGES")) {
       const nodelperms = new Discord.RichEmbed()
      .setAuthor('You Do Not Have Enough Permissions!!)
      message.channel.sendEmbed(nodelperms);
     }else{
       message.delete()
	message.channel.bulkDelete(args[1]);}
};

module.exports.help = {
    name: "del"
};
