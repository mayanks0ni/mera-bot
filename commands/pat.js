let men2 = message.mentions.users.first();
	 if(!men2){
		 const nomen1 = new Discord.RichEmbed()
		 .setTitle('Please mention someone to pat!')
		 .setFooter('IAT Bot')
		 .setTimestamp()
     .setColor(0xff0000)
		 message.channel.send(nomen1)
	 }else{
	 

		let {body} = await superagent
		.get(`https://nekos.life/api/v2/img/pat`);

		let patembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setTitle(`${message.author.username} patted ${men2.username}! Kawaii!`)
		.setImage(body.url)
		.setTimestamp()
		.setFooter('IAT Bot')
		message.channel.send(patembed);
	 } 
