const Discord = module.require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
    const subReddits = ["meme",
			"animemes",
			"MemesOfAnime",
			"animememes",
			"AnimeFunny",
			"dankmemes",
			"dankmeme",
			"wholesomememes",
			"MemeEconomy",
			"techsupportanimals",
			"meirl",
			"me_irl",
			"2meirl4meirl",
			"AdviceAnimals"
		       ];

			const random = subReddits[Math.floor(Math.random() * subReddits.length) - 1];


			const img = await randomPuppy(random);
			const memeembed = new Discord.RichEmbed()
				.setColor("RANDOM")
				.setImage(img)
				.setTitle(`From /r/${random}`)
				.setURL(`https://reddit.com/r/${random}`);

			message.channel.sendEmbed(memeembed);
};

module.exports.help = {
    name: "meme"
};
