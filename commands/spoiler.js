const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    let text = args.slice(1).join(" ");
    const spoilerembed = new Discord.RichEmbed()
                .setAuthor('📄 Spoiler!! 📄')
                .setDescription(`||${text}||`)
                .setColor(0x000000)
                .setFooter('IAT Bot')
                .setTimestamp()
			message.channel.sendEmbed(spoilerembed);
};

module.exports.config = {
    name: "spoiler",
    description: "A Command To Send The Provided Text In Spoiler Form Through The Bot!",
    usage: "+spoiler [text]",
    accessableby: "Members",
    aliases: [""]
}
