const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
		  const embed = new Discord.RichEmbed()
		  .setTitle('Basic help commands!')
		  .addField('info', 'Gives the info of the programmer!')
		  .addField('ban [user]', 'Moderation command for banning a Member!')
		  .addField('kick [user]', 'Moderation command for kicking a Member!')
		  .addField('avatar [user]', 'Basic command to view the avatar URl of the mentioned user!')
		  .addField('meminfo', 'A Command to view the member count of the server!')
		  .addField('say [text]', 'A command to send messages through the bot!')
		  .addField('announce [channel] [text]', 'A command to announce messages!')
		  .addField('suggest [suggestion]', 'A command to give suggestions!')
		  .addField('hug [user]', 'Hugs the mentioned user!')
                  .addField('kiss [user]', 'Kisses the mentioned user!')
                  .addField('pat [user]', 'Pats the mentioned user!')
                  .addField('fact', 'Sends a random fact!')
                  .addField('wallpaper', 'Command to get a random wallpaper!')
                  .addField('dm [user]', 'Directly send the mentioned user message through the bot!')
		  .addField('mentionrole [rolename]', 'Mentions the role by specifying only its name!')
                  .setColor(0xff47bf)
		  message.author.sendEmbed(embed);
                  message.react('☑️');
                  const helpdm = new Discord.RichEmbed()
                  .setAuthor('Check Your DM!')
                  .setColor("RANDOM")
                  message.channel.sendEmbed(helpdm);
		 
};

module.exports.help = {
    name: "helpdm"
};
