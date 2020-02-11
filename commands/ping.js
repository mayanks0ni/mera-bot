const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const pingMsg = await message.channel.send('🔄 | Pinging...');
        return pingMsg.edit('📡Ping - ' + Math.round(bot.ping) + 'ms📡');
};

module.exports.help = {
    name: "ping"
};
