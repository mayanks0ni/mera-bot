const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const Infoembed = new Discord.RichEmbed()
				.setDescription('I am a bot programmed by SpideY!')
			message.channel.sendEmbed(Infoembed);
};

module.exports.help = {
    name: "info"
};
