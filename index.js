const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '+'; 

bot.on('ready', () =>{
	console.log('The bot is online!');
	bot.user.setActivity('+help', {type: "LISTENING"});
});

bot.on('guildMemberAdd', member =>{
	const channel = member.guild.channels.find(channel => channel.name === "〢join-leave");
	if(!channel) return;
	const joinembed = new Discord.RichEmbed()
	        .setTitle('Welcome To Indian Anime TV\'s Server!')
		.setDescription(`Welcome to our server ${member}! Hope you enjoy your stay here!`)
		.setImage('https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif')
		.setFooter('By IAT Bot!')
		.setColor(0x3dffcf)
	channel.send(joinembed);
})

bot.on('guildMemberRemove', member =>{
	const channel1 = member.guild.channels.find(channel => channel.name === "〢join-leave");
	if(!channel1) return;
	const leaveembed = new Discord.RichEmbed()
	.setDescription(`${member}, has left the server!`)
        .setColor(0x3dffcf)
	channel1.send(leaveembed);
})

bot.on('message', message=>{
          if (!message.content.startsWith(PREFIX) || message.author.bot) return;
	  let args = message.content.substring(PREFIX.length).split(" ");

	  switch(args[0]){
	  case 'info':
		  const Infoembed = new Discord.RichEmbed()
		  .setDescription('I am a bot programmed by SpideY!')
		  message.channel.sendEmbed(Infoembed);
                  message.react('😀');
		  break;
		  
	  case 'helpdm':
		  const embed = new Discord.RichEmbed()
		  .setTitle('Basic help commands!')
		  .addField('info', 'Gives the info of the programmer!')
		  .addField('ban', 'Moderation command for banning a Member!')
		  .addField('kick', 'Moderation command for kicking a Member!')
		  .addField('avatar', 'Basic command to view the avatar URl of the mentioned user!')
		  .addField('meminfo', 'A Command to view the member count of the server!')
		  .addField('say', 'A command to send messages through the bot!')
		  .addField('announce', 'A command to announce messages!')
		  .addField('suggest', 'A command to give suggestions!')
                  .addField('dm', 'Directly send the mentioned user message through the bot!')
                  .setColor(0xff47bf)
		  message.author.sendEmbed(embed);
                  message.react('☑️');
                  const helpdm = new Discord.RichEmbed()
                  .setDescription('Check Your DM!')
                  message.channel.sendEmbed(helpdm);
		  break;
			  
         case 'help':
		  const embed1 = new Discord.RichEmbed()
		  .setTitle('Basic help commands!')
		  .addField('info', 'Gives the info of the programmer!')
		  .addField('ban', 'Moderation command for banning a Member!')
		  .addField('kick', 'Moderation command for kicking a Member!')
		  .addField('avatar', 'Basic command to view the avatar URl of the mentioned user!')
		  .addField('meminfo', 'A Command to view the member count of the server!')
		  .addField('say', 'A command to send messages through the bot!')
		  .addField('announce', 'A command to announce messages!')
		  .addField('suggest', 'A command to give suggestions!')
                  .addField('dm', 'Directly send the mentioned user message through the bot!')
                  .setColor(0xff47bf)
                  message.channel.sendEmbed(embed1);
		  break;

	  case 'kick':
			  message.delete()
			if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('YOU DON\'T HAVE ENOUGH PERMISSIONS!')
			const user1 = message.mentions.users.first();
			if (user1) {
				const member1 = message.guild.member(user1);

				if (member1) {
					member1.kick('Optional reason that will display in the audit logs').then(() => {
						message.reply(`Successfully kicked ${user1.tag}`);
					}).catch(err => {
						const error = new Discord.RichEmbed()
							.setDescription('The user cannot be kicked due to no permissions or due to mine role is below that members role!')
							.setColor(0xfa0000)
						message.channel.sendEmbed(error);
						console.error(err);
					});
				} else {
					message.reply('That user isn\'t in this guild!');
				}
				break;
			}
		case 'ban':
			  message.delete()
			if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('YOU DON\'T HAVE ENOUGH PERMISSIONS!')
			const user = message.mentions.users.first();
			if (user) {
				const member = message.guild.member(user);
				if (member) {
					member.ban({
						reason: 'They were bad!',
					}).then(() => {
						const banembed = new Discord.RichEmbed()
							.setDescription(`Succesfully bannned ${user.tag}`)
							.setColor(0x00fa21)
						message.channel.sendEmbed(banembed);
					}).catch(err => {
						const errorbanembed = new Discord.RichEmbed()
							.setDescription('The user cannot be banned due to no permissions or due to mine role is below that members role!')
							.setColor(0xfa0000)
						message.channel.sendEmbed(errorbanembed);
						console.error(err);
					});
				} else {
					const notinguildembed = new Discord.RichEmbed()
						.setDescription('The mentioned user is not in the guild!')
						.setColor(0xabfa00)
					message.channel.sendEmbed(notinguildembed);
				}
			} else {
				const nomention = new Discord.RichEmbed()
					.setDescription('You didn\'t mention the user to ban!')
					.setColor(0x6c00fa)
				message.channel.sendEmbed(nomention);
				message.delete(3000);
			} break;

case 'meminfo':
	 const memberembed = new Discord.RichEmbed()
	 .setDescription(`Total Members = ${message.guild.memberCount}`)
	 .setColor(0x8cf5a8)
	 message.channel.sendEmbed(memberembed);
	 break;

case 'avatar':
	const user3 = message.mentions.users.first();
   const avatarembed = new Discord.RichEmbed()
   .setTitle(`User Avatar For ${user3.tag}`)
   .setImage(`${user3.displayAvatarURL}`)
   .setColor(0xfccc2b)
   message.channel.sendEmbed(avatarembed);
   break;

		  case 'del':
			  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('YOU DON\'T HAVE ENOUGH PERMISSIONS!')
       message.delete()
	message.channel.bulkDelete(args[1]);
        break;
                  
	          case 'suggest':
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
                                break;
	    case 'say':
			message.delete()
			let saymessage = args.slice(1).join(" ");
			message.channel.send(saymessage);
			  break;
			  
            case 'announce':
			if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('YOU DON\'T HAVE ENOUGH PERMISSIONS!')
			let ancmessage;
			let mchannel = message.mentions.channels.first()
            message.delete()
			if(mchannel){
				 ancmessage = args.slice(2).join(" ");
				const anc = new Discord.RichEmbed()
				.setDescription(`${ancmessage}`)
				.setFooter(`Announced by ${message.author.tag}`)
				.setColor(0x6bffe1)
				mchannel.sendEmbed(anc);
			}else{
                ancmessage = args.slice(1).join(" ");
				const anc1 = new Discord.RichEmbed()
				.setDescription(`${ancmessage}`)
				.setFooter(`Announced by ${message.author.tag}`)
				.setColor(0xffc859)
				message.channel.sendEmbed(anc1);
				break;
			}
        case 'dm':
			if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('❌YOU DON\'T HAVE ENOUGH PERMISSIONS!❌')
			  const dmtext = args.slice(2).join(" ");
			const dmuser = message.mentions.users.first()
			message.delete()
			if(!dmuser) return;
			const dmmessage = new Discord.RichEmbed()
		.setDescription(`${dmtext}`)
		.setFooter(`From IAT Bot at ${message.createdAt}`)
		.setColor(0x41faa1)
		dmuser.sendEmbed(dmmessage);
			  
}});


bot.login(process.env.BOT_TOKEN);
