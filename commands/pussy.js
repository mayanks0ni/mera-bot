const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'pussy'})
    .end((err, response) => {
      const pussy = new Discord.RichEmbed()
   .setAuthor(`Pussy Images for ${message.author.username}!`)
   .setImage(response.body.message)
  .setTimestamp()
.setColor("RANDOM")
  .setFooter('IAT Bot')
      message.channel.sendEmbed(pussy);
    });
  } else {
    const notnsfw = new Discord.RichEmbed()
    .setTitle('This channel is not a nsfw channel!!')
    .setColor(0xfa0202)
    .setTimestamp()
    .setFooter('IAT Bot')
    message.channel.sendEmbed(notnsfw);
  }
};

module.exports.help = {
    name: "pussy.js"
};
