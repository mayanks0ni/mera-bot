const Discord = module.require("discord.js");
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hanal'})
    .end((err, response) => {
      const hanal = new Discord.RichEmbed()
   .setAuthor(`Hentai Anal Images for ${message.author.username}!`)
   .setImage(response.body.message)
  .setTimestamp()
  .setColor("RANDOM")
  .setFooter('IAT Bot')
      message.channel.sendEmbed(hanal);
    });
  } else {
    const notnsfw = new Discord.RichEmbed()
    .setTitle('**This channel is not a NSFW channel!!**')
    .setTimestamp()
    .setColor(0xfa0202)
    .setFooter('IAT Bot')
    message.channel.sendEmbed(notnsfw);
  }
};

module.exports.help = {
    name: "hanal"
};
