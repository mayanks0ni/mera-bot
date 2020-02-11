const Discord = require("discord.js");
const urban = require("urban");

module.exports.run = async (bot, message, args) => {
    if(args.length < 1) return message.reply("Please enter something!");
    let XD = args.slice(1).join(" "); 

    urban(XD).first(json => {
        if(!json) return message.reply("No results found for the word!")

        let urbEmbed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by: ${json.author}`);

        message.channel.send(urbEmbed)
    });


}

module.exports.help = {
    name: "urban"
}
