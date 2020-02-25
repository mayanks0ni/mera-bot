const Discord = module.require("discord.js");
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'ass'})
    .end((err, response) => {
      const ass = new Discord.RichEmbed()
   .setAuthor(`Ass Images for ${message.author.username}!`)
   .setImage(response.body.message)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter('IAT Bot')
      message.channel.sendEmbed(ass);
    });
  } else {
    const notnsfw = new Discord.RichEmbed()
    .setTitle('This channel is not a nsfw channel!!')
    .setTimestamp()
    .setColor(0xfa0202)
    .setFooter('IAT Bot')
    message.channel.sendEmbed(notnsfw);
  }
};

module.exports.config = {
    name: "ass",
    description: "A Commamd To View Ass Images!",
    usage: "+ass",
    accessableby: "Members",
    aliases: [""]
}
