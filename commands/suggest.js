const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
			message.delete()
			let suggestion;
			  suggestion = args.slice(1).join(" ");
			  const suggested = new Discord.RichEmbed()
			  .setTitle('Suggestion')
			  .setDescription(`${suggestion}`)
			  .setColor(0xccff80)
			  .setFooter(`Suggestion by ${message.author.tag}`)
                          .setTimestamp()
			  message.guild.channels.find(c => c.name === "〢suggestions").send(suggested)
			  .then(function (message) {
				message.react("👍")
				.then(() => message.react('👎'))})
                                
};

module.exports.config = {
    name: "suggest",
    description: "A Command To Make Suggestions!",
    usage: "+suggest [suggestion]",
    accessableby: "Members",
    aliases: [""]
}
