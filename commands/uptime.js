const Discord = module.require("discord.js");

let days = 0;
let week = 0;

module.exports.run = async (bot, message, args) => {
    let uptime = ``;
    let totalSeconds = (bot.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let uptimeembed = new Discord.RichEmbed()
        .setColor("GOLD")
        .addField('Uptime - ', uptime);

    message.channel.send(uptimeembed);
};

module.exports.config = {
    name: "uptime",
    description: "A Command To View The Uptime Of The Bot!",
    usage: "+uptime",
    accessableby: "Members",
    aliases: ["ut"]
}
