const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed1 = new Discord.RichEmbed()
		  .setTitle('Basic help commands!')
		  .addField('info', 'Gives the info of the programmer!')
		  .addField('ban [user]', 'Moderation command for banning a Member!')
		  .addField('kick [user]', 'Moderation command for kicking a Member!')
		  .addField('avatar [user]', 'Basic command to view the avatar URl of the mentioned user!')
		  .addField('meminfo', 'A Command to view the member count of the server!')
		  .addField('say [text]', 'A command to send messages through the bot!')
		  .addField('announce [channel] [text]', 'A command to announce messages!')
		  .addField('suggest [suggestion]', 'A command to give suggestions!')
      .addField('dm [user]', 'Directly send the mentioned user message through the bot!')
		  .addField('mentionrole [rolename]', 'Mentions the role by specifying only its name!')
      .setColor(0xff47bf)
       message.channel.sendEmbed(embed1);
    
      if(args[1] === "nsfw"){
const nsfwembed = new Discord.RichEmbed()
	.setTitle('NSFW Commands!')
        .addField('porn', 'Command for viewing porn gifs!')
        .addField('4k', 'Command for viewing 4k porn images!')
        .addField('pussy', 'Command for viewing pussy images!')
        .addField('hentai', 'Command for viewing Hentai images!')
        .addField('hass', 'Command to view Hentai Ass Images!')
        .addField('anal', 'Command to view Anal Images!')
        .addField('hanal', 'Command to view Hentai Anal Images!')
	.setColor("GOLD")
        .setTimestamp()		
message.channel.sendEmbed(nsfwembed);
};

module.exports.help = {
    name: "help"
};
