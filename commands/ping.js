const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const pingMsg = await message.channel.send('🔄 | Pinging...');
        return pingMsg.edit(`🐱 | ${choice} \`(${pingMsg.createdTimestamp - message.createdTimestamp}ms)\``);
};

module.exports.help = {
    name: "ping"
};
