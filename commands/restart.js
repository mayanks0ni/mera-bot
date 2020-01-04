const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    let isBotOwner = message.author.id == '516247416878530560';
if (!isBotOwner)
        return;

      message.channel.send('Restarting...').then(m => {
        bot.destroy().then(() => {
          bot.login(process.env.BOT_TOKEN);
        });
      });
};

module.exports.help = {
    name: "restart"
};
