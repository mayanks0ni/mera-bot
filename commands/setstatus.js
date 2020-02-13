const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const status1 = args.slice(1).join(" ");
   bot.user.setActivity(status1, {type:"LISTENING"});
};

module.exports.help = {
    name: "setstatus"
};
