const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
			message.delete()
			let suggestion;
			  suggestion = args.slice(1).join(" ");
			  const suggested = new Discord.RichEmbed()
			  .setTitle('Suggestion')
			  .setDescription(`${suggestion}`)
			  .setColor(0xccff80)
			  .setFooter(`Suggestion by ${message.author.tag} at ${message.createdAt}`)
			  bot.channels.get("629716423656079380").send(suggested)
			  .then(function (message) {
				message.react("👍")
				.then(() => message.react('👎'))})
                                
};

module.exports.help = {
    name: "suggest"
};
