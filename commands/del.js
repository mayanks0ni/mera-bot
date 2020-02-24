const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
       if (!message.member.hasPermission("MANAGE_MESSAGES")) {
       const nodelperms = new Discord.RichEmbed()
      .setAuthor('You Do Not Have Enough Permissions!!')
      .setFooter('IAT Bot') 
      .setTimestamp()
      message.channel.sendEmbed(nodelperms);
     }else{
       await message.channel.messages.fetch({ limit: args[1] }).then(messages => { 
    message.channel.bulkDelete
)};

module.exports.help = {
    name: "del"
};
