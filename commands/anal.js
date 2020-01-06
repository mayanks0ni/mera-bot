const Discord = module.require("discord.js");
const superagent = require('superagent')
module.exports.run = async (bot, message, args) => {
    if (message.channel.nsfw === true) {
    superagent.get('https://nekos.life/api/v2/img/anal')
   
      message.channel.send({ file: response.body.url });
   
  } else {
    message.channel.send("This isn't NSFW channel!")
  }
};

module.exports.help = {
    name: "anal"
};
