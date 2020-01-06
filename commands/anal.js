const Discord = module.require("discord.js");
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw === true) {
    let body = await superagent
    .get('https://nekos.life/api/v2/img/anal')
      
     const analembed = new Discord.RichEmbed()
    .setImage(body.url)
    .setTimestamp()
    .setTitle(`Anal Image for ${message.author.username}`)
    message.channel.sendEmbed(analembed);
   
  } else {
    message.channel.send("This isn't NSFW channel!")
  }
};

module.exports.help = {
    name: "anal"
};
