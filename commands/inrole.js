const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
    const rolename = args.slice(1).join(" ");
    const inroleEmbed = new Discord.RichEmbed()
            .setTitle(`Members With ${rolename} Role!`)
            .setDescription(message.guild.roles.find(r=>r.name === rolename).members.map(m=>m.user.tag).join('\n'))
            .setFooter('IAT Bot')
            .setTimestamp()
            .setColor("RANDOM")
        message.channel.send(inroleEmbed);
};

module.exports.config = {
    name: "inrole",
    description: "A Command To View The Members In a Particular Role!",
    usage: "+inrole [rolename]",
    accessableby: "Members",
    aliases: ["ir"]
}
