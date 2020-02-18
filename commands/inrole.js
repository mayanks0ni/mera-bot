const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
 let role1 = args.slice(1).join(" ")
      const inroleEmbed = new Discord.RichEmbed()
            .setTitle(`Users with the ${role1} role:`)
            .setDescription(message.guild.roles.find(r=>r.name === role1).members.map(m=>m.user.tag).join('\n'))
            .setFooter('IAT Bot')
            .setColor("RANDOM")
            .setTimestamp()
message.channel.send(inroleEmbed);
};

module.exports.help = {
    name: "inrole"
};
