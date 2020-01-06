const Discord = module.require("discord.js");
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
      if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai_anal'})
    .end((err, response) => {
    const hentai = new Discord.RichEmbed
   .setAuthor(`Hentai Images for ${message.author.username}!`)
   .setImage(response.body.message)
  .setTimestamp()
  .setFooter('IAT Bot')
      message.channel.sendEmbed(hentai);
    });
  } else {
    const notnsfw = new Discord.RichEmbed()
    .setTitle('This channel is not a nsfw channel!!')
    .setTimestamp()
    .setFooter('IAT Bot')
    message.channel.sendEmbed(notnsfw);
  }
};

module.exports.help = {
    name: "hentai"
};
