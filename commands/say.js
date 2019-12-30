const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
			message.delete()
			let saymessage = args.slice(1).join(" ");
			message.channel.send(saymessage);
			 
};

module.exports.help = {
    name: "say"
};
