const Discord = module.require("discord.js");
const moment = require("moment");

const status = {
    online: "Online",
    idle: "Idle",
    dnd: "Do Not Disturb",
    offline: "Offline/Invisible"
};

module.exports.run = async (bot, message, args) => {
    var permissions = [];
    var acknowledgements = 'None';
   
    const member = message.mentions.members.first() || message.guild.members.get(args[1]) || message.member;
    
    if(member.hasPermission("KICK_MEMBERS")){
        permissions.push("Kick Members");
    }
    
    if(member.hasPermission("BAN_MEMBERS")){
        permissions.push("Ban Members");
    }
    
    if(member.hasPermission("ADMINISTRATOR")){
        permissions.push("Administrator");
    }

    if(member.hasPermission("MANAGE_MESSAGES")){
        permissions.push("Manage Messages");
    }
    
    if(member.hasPermission("MANAGE_CHANNELS")){
        permissions.push("Manage Channels");
    }
    
    if(member.hasPermission("MENTION_EVERYONE")){
        permissions.push("Mention Everyone");
    }

    if(member.hasPermission("MANAGE_NICKNAMES")){
        permissions.push("Manage Nicknames");
    }

    if(member.hasPermission("MANAGE_ROLES")){
        permissions.push("Manage Roles");
    }

    if(member.hasPermission("MANAGE_WEBHOOKS")){
        permissions.push("Manage Webhooks");
    }

    if(member.hasPermission("MANAGE_EMOJIS")){
        permissions.push("Manage Emojis");
    }
    
    if(member.hasPermission("SEND_MESSAGES")){
				permissions.push("Send Messages");
			}

            if(member.hasPermission("READ_MESSAGES")){
				permissions.push("Read Messages");
			}

			if(member.hasPermission("ADD_REACTIONS")){
				permissions.push("Add Reactions");
			}

			if(member.hasPermission("ATTACH_FILES")){
				permissions.push("Attach Files");
			}

			if(member.hasPermission("CHANGE_NICKNAME")){
				permissions.push("Change Nickname");
			}

			if(member.hasPermission("CONNECT")){
				permissions.push("Connect");
			}

			if(member.hasPermission("DEAFEN_MEMBERS")){
				permissions.push("Deafen Members");
			}

			if(member.hasPermission("READ_MESSAGE_HISTORY")){
				permissions.push("Read Message History");
			}

			if(member.hasPermission("MUTE_MEMBERS")){
				permissions.push("Mute Members");
			}

			if(member.hasPermission("SPEAK")){
				permissions.push("Speak");
			}

    if(permissions.length == 0){
        permissions.push("No Permissions Found!");
    }

    if(`<@${member.user.id}>` == message.guild.owner){
        acknowledgements = 'Server Owner';
    }

    const embed = new Discord.RichEmbed()
        .setDescription(`<@${member.user.id}>`)
        .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL)
        .setColor("RANDOM")
        .setFooter(`ID - ${message.author.id}`)
        .setThumbnail(member.user.displayAvatarURL)
        .setTimestamp()
        .addField("Status",`${status[member.user.presence.status]}`, true)
        .addField('Joined at: ',`${moment(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField(" Account Created at: ",`${moment(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
        .addField("Permissions: ", `${permissions.join(', ')}`, true)
        .addField(`Roles [${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]`,`${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(" **|** ") || "No Roles"}`, true)
        .addField("Acknowledgements: ", `${acknowledgements}`, true);
        
    message.channel.send({embed});

};
module.exports.config = {
    name: "userinfo",
    description: "A Command To Vjew The Userinfo Of Yourself Or An User!",
    usage: "+userinfo [user]",
    accessableby: "Members",
    aliases: ["ui"]
}
