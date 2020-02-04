const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const pingMsg = new Discord.RichEmbed()
.setTitle('🔄Pinging....')
.setFooter('IAT Bot')
.setColor("RANDOM")

await message.channel.send(pingMsg);
const pingMs = new Discord.RichEmbed()
.setTitle(`📡Ping (${pingMsg.createdTimestamp - message.createdTimestamp}ms)📡`)
.setFooter('IAT Bot') 
.setColor("RANDOM")
.setTimestamp()
return pingMsg.edit(pingMs);
};

module.exports.help = {
    name: "ping"
};
