const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const nsfwembed = new Discord.RichEmbed()
	.setTitle('NSFW Commands!')
        .addField('porn', 'Command for viewing porn gifs!')
        .addField('4k', 'Command for viewing 4k porn images!')
        .addField('pussy', 'Command for viewing pussy images!')
        .addField('hentai', 'Command for viewing Hentai images!')
        .addField('hass', 'Command to view Hentai Ass Images!')
        .addField('anal', 'Command to view Anal Images!')
        .addField('hanal', 'Command to view Hentai Anal Images!')
        .addField('boobs', 'Command to view Boobs Images!')
	.setColor("GOLD")
        .setTimestamp()		
message.channel.sendEmbed(nsfwembed);
};

module.exports.help = {
    name: "helpnsfw"
};
