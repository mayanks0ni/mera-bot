const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let topin = args[1];
		message.pin(topin);
};

module.exports.config = {
    name: "pin",
    description: "A Command To Pin A Message by Providing Its ID!",
    usage: "+pin [message ID]",
    accessableby: "Staffs & Moderator",
    aliases: [""]
}
