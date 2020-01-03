const Discord = module.require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
    const subReddits = ["boobs"
			
		       ];

			const random = subReddits[Math.floor(Math.random() * subReddits.length)];


			const img = await randomPuppy(random);
			const memeembed = new Discord.RichEmbed()
				.setColor("RANDOM")
				.setImage(img)
				.setTitle('Here\'s a Boob\'s Image!')
			

			message.channel.sendEmbed(memeembed);
};

module.exports.help = {
    name: "boobs"
};
