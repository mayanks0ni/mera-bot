const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
   const user3 = message.mentions.users.first() || message.author
   const avatarembed = new Discord.RichEmbed()
   .setTitle(`User Avatar For ${user3.tag}`)
   .setImage(`${user3.displayAvatarURL}`)
   .setColor("RANDOM")
   message.channel.sendEmbed(avatarembed);
};

module.exports.config = {
    name: "avatar",
    description: "A Command To View Avatar Of Yourself Or The Mentioned User!",
    usage: "+avatar [user]",
    accessableby: "Members",
    aliases: ["av"]
}
