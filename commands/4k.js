const Discord = module.require("discord.js");
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
      const 4k = new Discord.RichEmbed()
   .setAuthor(`4k Images for ${message.author.username}!`)
   .setImage(response.body.message)
  .setTimestamp()
.setColor("RANDOM")
  .setFooter('IAT Bot')
      message.channel.sendEmbed(4k);
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

module.exports.help = {
    name: "4k"
};
