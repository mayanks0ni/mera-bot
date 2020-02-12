const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require("fs");
const SQLite = require("sqlite");


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
	
	const table = sql.prepare("SELECT count(*) FROM sqlite_master WHERE type='table' AND name = 'scores';").get();
  if (!table['count(*)']) {
   
    sql.prepare("CREATE TABLE scores (id TEXT PRIMARY KEY, user TEXT, guild TEXT, points INTEGER, level INTEGER);").run();
    
    sql.prepare("CREATE UNIQUE INDEX idx_scores_id ON scores (id);").run();
    sql.pragma("synchronous = 1");
    sql.pragma("journal_mode = wal");
  }

  // And then we have two prepared statements to get and set the score data.
  client.getScore = sql.prepare("SELECT * FROM scores WHERE user = ? AND guild = ?");
  client.setScore = sql.prepare("INSERT OR REPLACE INTO scores (id, user, guild, points, level) VALUES (@id, @user, @guild, @points, @level);");
	
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
	if(message.author.bot) return;
	let score;
  if (message.guild) {
    score = bot.getScore.get(message.author.id, message.guild.id);
    if (!score) {
      score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 }
    }
    score.points++;
    const curLevel = Math.floor(0.1 * Math.sqrt(score.points));
    if(score.level < curLevel) {
      score.level++;
	    const levelupembed = new Discord.RichEmbed()
	    .setAuthor(`${message.author.username} has leveled up!`, `${message.author.displayAvatarURL}`)
	    .setDescription(`You've leveled up to level **${curLevel}**!`)
	    .setTimestamp()
	    .setFooter('IAT Bot')
      message.channel.send(levelupembed);
    }
    bot.setScore.run(score);
  }
  
        let msgArray = message.content.split(/\s+/g)
        let command = msgArray[0];
	let args = message.content.substring(PREFIX.length).split(" ");
	if (!message.content.startsWith(PREFIX)) return;
        if(message.channel.type === "dm") return; 
	let cmd = bot.commands.get(command.slice(PREFIX.length));
		if (cmd) cmd.run(bot, message, args);

	});


bot.login(process.env.BOT_TOKEN);
