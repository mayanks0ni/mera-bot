const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '~'; 

bot.on('ready', () =>{
	console.log('The bot is online!');
	bot.user.setActivity('~help', {type: "LISTENING"});
});

bot.on('guildMemberAdd', member =>{
	  
	const channel = member.guild.channels.find(channel => channel.name === "〢join-leave");
	if(!channel) return;
	const welcomeembed = new Discord.RichEmbed()
	.setDescription(`${member}, Welcome to our server, hope you enjoy your stay here!`)
	.setColor(0x3dffcf)
	channel.send(welcomeembed);

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
		  
	  case 'help':
		  const embed = new Discord.RichEmbed()
		  .setTitle('Basic help commands!')
		  .addField('info', 'Gives the info of the programmer!')
		  .addField('ban', 'Moderation command for banning a Member!')
		  .addField('kick', 'Moderation command for kicking a Member!')
		  .addField('avatar', 'Basic command to view the avatar URl of the mentioned user!')
		  .addField('members', 'A Command to view the member count of the server!')
		  message.author.sendEmbed(embed);
                  message.react('☑️');
                  const helpdm = new Discord.RichEmbed()
                  .setDescription('Check Your DM!')
                  message.channel.sendEmbed(helpdm);
		  break;

	  case 'kick':
			if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('❌YOU DON\'T HAVE ENOUGH PERMISSIONS!❌')
                           message.delete(5000);
		  const user1 = message.mentions.users.first();
		  if (user1) {
			  const member1 = message.guild.member(user1);

			  if (member1) {
				member1.kick('Optional reason that will display in the audit logs')
					.then(() => {
					message.reply(`Successfully kicked ${user.tag}`);
				}).catch(err => {
					const error = new Discord .RichEmbed()
					.setDescription('The user cannot be kicked due to no permissions or due to mine role is below that members role!')
					.setColor(0xfa0000)
					message.channel.sendEmbed(error);
					console.error(err);
				});
			 } else {
				message.reply('❌That user isn\'t in this guild!❌');
				 }
				 break;
			  }
			  case 'ban':
					if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('❌YOU DON\'T HAVE ENOUGH PERMISSIONS!❌')
                                        message.delete(5000);
					const user2 = message.mentions.users.first();
					if (user2) {
						const member2 = message.guild.member(user2);
						if (member2) {
							member2.ban({
								reason: 'They were bad!',
        }).then(() => {
			const banembed = new Discord.RichEmbed()
			.setDescription(`Succesfully bannned ${user.tag}`)
			.setColor(0x00fa21)
			message.channel.sendEmbed(banembed);
		}).catch(err => {
			const errorbanembed = new Discord.RichEmbed()
			.setDescription('❌The user cannot be banned due to no permissions or due to mine role is below that members role!❌')
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
	.setDescription('❌You didn\'t mention the user to kick/ban!❌')
	.setColor(0x6c00fa)
	message.channel.sendEmbed(nomention);
	break;
}



case 'meminfo':
	 const memberembed = new Discord.RichEmbed()
	 .setDescription(`Total Members = ${message.guild.memberCount}`)
	 .setColor(0x8cf5a8)
	 message.channel.sendEmbed(memberembed);
	 break;

case 'avatar':
	const user3 = message.mentions.users.first();
   const avatarembed = new Discord.RichEmbed()
   .setTitle(`User Avatar Link For ${user3.tag}`)
   .setDescription(`${user3.avatar}`)
   .setColor(0xfccc2b)
   message.channel.sendEmbed(avatarembed);
   break;

		  case 'del':
       message.delete()
	message.channel.bulkDelete(args[1]);
                  case 'mention':
        message.delete()
        const mr = message.mentions.roles.first();
        message.channel.send(mr);
        break;
        
			  
}});


bot.login(process.env.BOT_TOKEN);
