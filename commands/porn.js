const Discord = module.require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
    const subReddits = ["porn"
			
		       ];

			const random = subReddits[Math.floor(Math.random() * subReddits.length)];


			const img = await randomPuppy(random);
			const pornembed = new Discord.RichEmbed()
				.setColor("RANDOM")
				.setImage(img)
				.setTitle('Here\'s a porn image')
			

			message.channel.sendEmbed(memeembed);
};

module.exports.help = {
    name: "porn"
};
