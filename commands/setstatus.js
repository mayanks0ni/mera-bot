const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

const type1 = args[1]
    const status1 = args.slice(2).join(" ");
   bot.user.setActivity(status1, {type:type1});
};

module.exports.help = {
    name: "setstatus"
};
