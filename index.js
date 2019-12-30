const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
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
	.setDescription(`${member}, has left the server 🙁. Hope you'll be back soon!`)
        .setColor(0x3dffcf)
	channel1.send(leaveembed);
})

bot.on('message',async message=>{
        let msgArray = message.content.split(/\s+/g)
        let command = msgArray[0];
	let args = message.content.substring(PREFIX.length).split(" ");
	if (!message.content.startsWith(PREFIX)|| message.author.bot) return;
	let cmd = bot.commands.get(command.slice(PREFIX.length));
		if (cmd) cmd.run(bot, message, args);

	});


bot.login(process.env.BOT_TOKEN);
