const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
   const user3 = message.mentions.users.first();
   const avatarembed = new Discord.RichEmbed()
   .setTitle(`User Avatar For ${user3.tag}`)
   .setImage(`${user3.displayAvatarURL}`)
   .setColor("RANDOM")
   message.channel.sendEmbed(avatarembed);
};

module.exports.help = {
    name: "avatar"
};
