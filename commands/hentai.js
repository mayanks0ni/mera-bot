const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
      if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai_anal'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("This isn't NSFW channel!")
  }
};

module.exports.help = {
    name: "hentai"
};
