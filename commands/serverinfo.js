const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    function checkBots(guild) {
        let botCount = 0;
        guild.members.forEach(member => {
            if(member.user.bot) botCount++;
        });
        return botCount;
    }
    
    function checkMembers(guild) {
        let memberCount = 0;
        guild.members.forEach(member => {
            if(!member.user.bot) memberCount++;
        });
        return memberCount;
    }

    function checkOnlineUsers(guild) {
        let onlineCount = 0;
        guild.members.forEach(member => {
            if(member.user.presence.status === "online")
                onlineCount++; 
        });
        return onlineCount;
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name} - Informations`, message.guild.iconURL)
        .setColor("CYAN")
        .addField('Server Owner', message.guild.owner, true)
        .addField('Server region', message.guild.region, true)
        .setThumbnail(sicon)
        .addField("Server Name", message.guild.name)
        .addField('Verification level', message.guild.verificationLevel, true)
        .addField('Channel count', message.guild.channels.size, true)
        .addField('Total member count', message.guild.memberCount)
        .addField('Humans', checkMembers(message.guild), true)
        .addField('Bots', checkBots(message.guild), true)
        .addField('Online Users', checkOnlineUsers(message.guild))
        .setFooter('Server created at - ')
        .setTimestamp(message.guild.createdAt);

    return message.channel.send(serverembed);

};

module.exports.help = {
    name: "serverinfo"
};