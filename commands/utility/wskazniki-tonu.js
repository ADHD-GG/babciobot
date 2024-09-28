const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wskazniki-tonu')
		.setDescription('Czym są i jak używać wskaźników tonu? /gen'),
	async execute(interaction) {
		await interaction.reply('Nowomowa? Żadna nowomowa, zaraz ci wszystko opowiem! https://discord.com/channels/1269650292215906418/1274782836221804554/1286633719792140333 /srs');
	},
};
