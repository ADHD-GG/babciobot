const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wskazniki-tonu')
		.setDescription('Czym są i jak używać wskaźników tonu? /gen'),
	async execute(interaction) {
		await interaction.reply('Nowomowa? Żadna nowomowa, zaraz ci wszystko opowiem! https://discord.com/channels/1269650292215906418/1382485764948103228/1382492638082760825 /srs');
	},
};
