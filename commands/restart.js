const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let isBotOwner = message.author.id == '516247416878530560';
if (!isBotOwner)
        return;

      message.channel.send('Restarting...').then(m => {
        bot.destroy().then(() => {
          bot.login('NjM2OTgyODc2Mjg5ODkyMzUy.XhBJ4A.AHrXaVSxi5zFoCEtt8FFpXBzQJw');
        });
      });
};

module.exports.help = {
    name: "restart"
};
