const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const Canvas = require("canvas");
const PREFIX = '+'; 

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	if (err){
		console.error(err);
	}	
	
	let jsfiles = files.filter(f => f.split(".").pop() === "js");
	if(jsfiles.length <= 0){
		console.log("No files found!!");
	}

	console.log(`Loaded ${jsfiles.length} commands`);

	jsfiles.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${i + 1}: ${f} loaded!`)
		bot.commands.set(props.help.name, props);
	});

});

bot.on('ready', () =>{
	console.log('The bot is online!');
	bot.user.setActivity('+help', {type:"LISTENING"});
});

bot.on('guildMemberAdd', async member =>{
	const channel = member.guild.channels.find(channel => channel.name === "〢join-leave");
	if(!channel) return;
	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');


	const background = await Canvas.loadImage('https://cdn.discordapp.com/attachments/645692503902781480/680017295019737118/UyWNCe.jpg');

	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);


	ctx.font = '28px Segoe Print';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Welcome To The Server,', canvas.width / 2.5, canvas.height / 3.5);


	
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');
         const joinembed = new Discord.RichEmbed()
	  .setTitle(`Welcome To The Server ${member.displayName}`)
	  .setFooter('IAT Bot')
	  .setTimestamp()
	  .setColor("GOLD")
	  .attachFiles([attachment])
	  .setImage('attachment://attachment')
          channel.send(joinembed); 
})

bot.on('guildMemberRemove', member =>{
	const channel1 = member.guild.channels.find(channel => channel.name === "〢join-leave");
	if(!channel1) return;
	const leaveembed = new Discord.RichEmbed()
	.setDescription(`${member}, has left the server 🙁. Hope you'll be back soon!`)
        .setColor(0x3dffcf)
	channel1.send(leaveembed);
})

bot.on('message',async message=>{
	if(message.channel.id === "582850962121687045"){

	let menrole = message.guild.roles.find(r=> r.name === "Anime Squad"
	)
	if(message.content.startsWith("Hey")){
       message.channel.send(`${menrole}`);
	}}else{
        let msgArray = message.content.split(/\s+/g)
        let command = msgArray[0];
	let args = message.content.substring(PREFIX.length).split(" ");
	if (!message.content.startsWith(PREFIX)|| message.author.bot) return;
        if(message.channel.type === "dm") return; 
	let cmd = bot.commands.get(command.slice(PREFIX.length));
		if (cmd) cmd.run(bot, message, args);}

	});


bot.login(process.env.BOT_TOKEN);
