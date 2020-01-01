const Discord = module.require("discord.js");
let xp = require("../xp.json");
module.exports.run = async (bot, message, args) => {

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 1
        };
    }

    let curxp = xp[message.author.id].xp;
    let curlevel = xp[message.author.id].level;
    let nlxp = curlevel * 300;
    let reqxp = nlxp - curxp;

    const levelembed = new Discord.RichEmbed()
                .setAuthor(`${message.author.tag}`)
                .addField('Level', `${curlevel}`, true)
                .addField('XP', `${curxp}`, true)
                .setColor("BLUE")
                .setFooter(`${reqxp} XP required for next level!`, `${message.author.displayAvatarURL}`)
			message.channel.sendEmbed(levelembed);
};

module.exports.help = {
    name: "level"
};
